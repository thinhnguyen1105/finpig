const mongoose = require('mongoose');
const User = mongoose.model('User');
const Group = mongoose.model('Group');
const Budget = mongoose.model('Budget');
const Transaction = mongoose.model('Transaction');
const TotalExchange = mongoose.model('TotalExchange');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

const MAXIMUM_AMOUNT = 1000000;
const TIME_DELAY_TRANSACTION = 2000;

async function postBank(req, res) {
    let type = 'balance';
    let senderId = req.body.sender;
    let receiverId = req.body.receiver;
    let amount = parseInt(req.body.amount);

    let sender, receiver;
    try {
        sender = await Budget.findById(senderId);
        receiver = await Budget.findById(receiverId);
    } catch (err) {
        return sendFailure(res);
    }

    verifyJwt(req, res, async function (userId) {
        let properPermission = await isProperPermission(sender, userId);
        if (!properPermission) {
            return sendFailure(res);
        }

        let transaction;
        try {
            transaction = await Transaction.create({
                sender: sender.ownerId,
                receiver: receiver.ownerId,
                amount: amount,
                type: type,
                status: 'pending'
            });
        } catch (err) {
            return sendFailure(res);
        }

        if (amount < 0 || amount > MAXIMUM_AMOUNT) {
            return sendFailure(res, true, {
                info: "Sorry, you don't have enough money"
            });
        }

        try {
            let totalExchange = await TotalExchange.findOne({
                sender: senderId,
                receiver: receiverId
            });
            if (!totalExchange) {
                totalExchange = await TotalExchange.create({
                    sender: senderId,
                    receiver: receiverId
                });
            }

            totalExchange.amount += amount;
            totalExchange = await totalExchange.save();
        } catch (err) {
            return sendFailure(res);
        }

        try {
            receiver[type] += amount;
            receiver = await receiver.save();
        } catch (err) {
            return sendFailure(res, true, {
                info: "Critical error! Please contact us for supporting"
            });
        }

        try {
            transaction.status = 'success';
            transaction = await transaction.save();
        } catch (err) {
            return sendFailure(res);
        }
        return sendSuccess(res, true, transaction);
    });
}

async function isProperPermission(sender, userId) {
    if (!sender) {
        return false;
    }

    if (userId === sender.ownerId.toString()) {
        return true;
    }

    if (sender.ownerType === 'group') {
        try {
            let group = await Group.findById(sender.ownerId);
            if (group.managerId.toString() === userId) {
                if (sender.balance >= group.goal) {
                    // group can only spend money when reached its goal
                    return true;
                } else {
                    return false;
                }
            }       
        } catch (err) {
            return false;
        }
    }

    return false;
}

async function postTransfer(req, res) {
    let senderId = req.body.sender;
    let senderType = 'balance';
    let receiverId = req.body.receiver;
    let receiverType = req.body.receiverType;
    let amount = parseInt(req.body.amount);

    let sender, receiver;
    try {
        sender = await Budget.findById(senderId);
        receiver = await Budget.findById(receiverId);
    } catch (err) {
        return sendFailure(res);
    }

    verifyJwt(req, res, async function (userId) {
        let properPermission = await isProperPermission(sender, userId);
        if (!properPermission) {
            return sendFailure(res);
        }

        let transaction;
        try {
            transaction = await Transaction.create({
                sender: sender.ownerId,
                receiver: receiver.ownerId,
                amount: amount,
                type: receiverType,
                status: 'pending'
            });
        } catch (err) {
            return sendFailure(res);
        }

        if (amount < 0 || amount > MAXIMUM_AMOUNT || sender[senderType] < amount) {
            return sendFailure(res, true, {
                info: "Sorry, you don't have enough money"
            });
        }

        if (senderId !== receiverId) {
            try {
                let totalExchange = await TotalExchange.findOne({
                    sender: senderId,
                    receiver: receiverId
                });
                if (!totalExchange) {
                    totalExchange = await TotalExchange.create({
                        sender: senderId,
                        receiver: receiverId
                    });
                }

                totalExchange.amount += amount;
                totalExchange = await totalExchange.save();
            } catch (err) {
                return sendFailure(res);
            }
        }

        try {
            sender[senderType] -= amount;
            sender = await sender.save();
            receiver[receiverType] += amount;
            receiver = await receiver.save();
        } catch (err) {
            return sendFailure(res, true, {
                info: "Critical error! Please contact us for supporting"
            });
        }

        try {
            transaction.status = 'success';
            transaction = await transaction.save();
        } catch (err) {
            return sendFailure(res);
        }
        return sendSuccess(res, true, transaction);
    });
}

module.exports = {
    postBank,
    postTransfer
};