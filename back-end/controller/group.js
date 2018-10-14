const mongoose = require('mongoose');
const User = mongoose.model('User');
const Group = mongoose.model('Group');
const Budget = mongoose.model('Budget');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

function getGroup(req, res) {
    let groupId = req.params.groupId;
    verifyJwt(req, res, (userId) => {
        User.findById(userId, (err, user) => {
            if (err) {
                return sendFailure(res);
            }
            if (!user.groups.includes(groupId)) {
                return sendFailure(res);
            };

            Group.findById(groupId, (err, group) => {
                if (err) {
                    return sendFailure(res);
                }
                return sendSuccess(res, true, group);
            });r
        });
    });
};

async function putGroup(req, res) {
    groupId = req.params.groupId;
    action = req.body.action;
    requestUserId = req.body.userId;
    verifyJwt(req, res, async (userId) => {
        try {
            let requestUser = await User.findById(requestUserId);
            if (!requestUser) {
                return sendFailure(res, true, 'User not exist');
            }

            let group = await Group.findById(groupId);
            if (group.managerId.toString() !== userId) {
                return sendFailure(res, true, {
                    info: "Sorry, you are not the manager of this group"
                });
            }
            if (action === 'add') {
                if (!isIncludeUserId(group.userIds, requestUserId)) {
                    group.userIds.push(mongoose.Types.ObjectId(requestUserId));
                    requestUser.groups.push(group._id);
                } else {
                    return sendFailure(res, true, {
                        info: "User already exist in group"
                    });
                }
            } else if (action === 'remove') {
                group.userIds = group.userIds.filter(item => item.toString() !== requestUserId);
                if (!!requestUser.groups) {
                    requestUser.groups = requestUser.groups.filter(item => item.toString() !== group._id.toString());
                }
            }
            group = await group.save();
            requestUser = await requestUser.save();

            return sendSuccess(res, true, group);
        } catch (err) {
            throw err;
            return sendFailure(res, true);
        }
    });
};

function isIncludeUserId(userIds, userId) {
    for (let i = 0; i < userIds.length; ++i) {
        if (userIds[i].toString() === userId) {
            return true;
        }
    }
    return false;
}

async function postGroup(req, res) {
    let data = {
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        goal: req.body.goal,
        userIds: req.body.userIds
    }
    verifyJwt(req, res, async (userId) => {
        try {
            if (!data.userIds) {
                data.userIds = []
            }
            data.userIds.push(userId);
            data.managerId = userId;

            let group = await Group.create(data);
            for (let i = 0; i < group.userIds.length; ++i) {
                let id = group.userIds[i];
                let user = await User.findById(id);
                if (!user.groups) {
                    user.groups = []
                }
                user.groups.push(group._id);
                user = await user.save();
            }
            let budget = await Budget.create({
                ownerType: 'group',
                ownerId: group._id,
                saving: 0,
                expense: 0
            });
            group.budget = budget._id;
            group = await group.save();
            return sendSuccess(res, true, group);
        } catch (err) {
            if (err) {
                sendFailure(res);
            }
        }
    });
}

module.exports = {
    getGroup,
    putGroup,
    postGroup
};