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

function postGroup(req, res) {
    let data = {
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        goal: req.body.goal,
        userIds: req.body.userIds
    }
    verifyJwt(req, res, (userId) => {
        if (!data.userIds) {
            data.userIds = []
        }
        data.userIds.push(userId);

        Group.create(data, (err, group) => {
            if (err) {
                return sendFailure(res);
            }
            Budget.create({
                ownerType: 'group',
                ownerId: group._id,
                saving: 0,
                expense: 0
            }, (err, budget) => {
                if (err) {
                    return sendFailure(res);
                }
                group.budget = budget._id;
                group.save((err, updatedGroup) => {
                    if (err) {
                        return sendFailure(res);
                    }
                    return sendSuccess(res, true, group);
                })
            });
        });
    });
}

module.exports = {
    getGroup,
    postGroup
};