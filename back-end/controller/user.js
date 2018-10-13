const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./jsonHelper');

function getUser(req, res) {
    verifyJwt(req, res, (userId) => {
        if (req.params.userId != userId) {
            return sendFailure(res, false);
        }
        User.findById(userId, { 
            password: 0,
            budget: 0,
            banking_card: 0
        }, (err, user) => {
            if (err) {
                return sendFailure(res);
            }
            return res.send(user);
        });
    });
}

module.exports = {
    getUser
};