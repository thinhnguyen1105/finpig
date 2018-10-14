const mongoose = require('mongoose');
const User = mongoose.model('User');
const BankingCard = mongoose.model('BankingCard');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

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

async function putUser(req, res) {
    verifyJwt(req, res, async (userId) => {
        if (req.params.userId !== userId) {
            return sendFailure(res, false);
        }
        try {
            let user = await User.findById(userId);

            let bankingCard = await BankingCard.findById(user.bankingCard);
            bankingCard.fullName = req.body.fullName;
            bankingCard.cardType = req.body.cardType;
            bankingCard.cardId = req.body.cardId;
            bankingCard.securityCode = req.body.securityCode;
            bankingCard = await bankingCard.save();

            if (req.body.name) {
                user.name = req.body.name;
            }
            if (req.body.password) {
                let password = req.body.password;
                if (!!password && password.toString() >= 6) {
                    user.password = bcrypt.hashSync(password, 8);
                } else {
                    return sendFailure(res, true, {
                        info: 'Password must have at least 6 characters'
                    });
                }
            }
            if (req.body.avatar) {
                user.avatar = req.body.avatar;
            }
            if (req.body.age) {
                user.age = req.body.age;
            }
            if (req.body.email) {
                user.email = req.body.email;
            }
            user = await user.save();
            user.password = null;
            user.securityCode = null;
            return sendSuccess(res, true, user);
        } catch (err) {
            return sendFailure(res);
        }
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

async function getMemberShip(req, res) {
    verifyJwt(req, res, async (userId) => {
        if (req.params.userId !== userId) {
            return sendFailure(res, false);
        }
        try {
            let user = await User.findById(userId, {
                password: 0,
                bankingCard: 0
            });  

            return sendSuccess(res, true, {
                memberShips: user.purchasedMemberShip
            });
        } catch (err) {
            if (err) {
                sendFailure(res);
            }
        }
    })
}

module.exports = {
    getUser,
    putUser,
    getGroup,
    getMemberShip
};