const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./jsonHelper');

function getUser(req, res) {
    verifyJwt(req, res, (userId) => {
        if (req.params.userId !== userId) {
            return sendFailure(res, false);
        }
        User.findById(userId, { 
            password: 0,
            bankingCard: 0
        }, (err, user) => {
            if (err) {
                return sendFailure(res);
            }
            return sendSuccess(res, true, user);
        });
    });
}

function getGroup(req, res) {
    verifyJwt(req, res, (userId) => {
        if (req.params.userId !== userId) {
            return sendFailure(res, false);
        }
        User.findById(userId, {
            password: 0,
            bankingCard: 0
        }, (err, user) => {
            if (err) {
                return sendFailure(res);
            }
            return sendSuccess(res, true, {
                groups: user.groups
            });
        });
    });
}

module.exports = {
    getUser,
    getGroup
};