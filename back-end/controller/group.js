const mongoose = require('mongoose');
const User = mongoose.model('User');
const Group = mongoose.model('Group');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./jsonHelper');

function getGroup(req, res) {
    verifyJwt(req, res, (userId) => {
        let groupId = req.params.groupId;
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
            });
        });
    });
};

module.exports = {
    getGroup
};