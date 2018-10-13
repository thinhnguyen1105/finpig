const mongoose = require('mongoose');
const User = mongoose.model('User');
const Budget = mongoose.model('Budget');
const Transaction = mongoose.model('Transaction');
const TotalExchange = mongoose.model('TotalExchange');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

const MAXIMUM_AMOUNT = 1000000;
const TIME_DELAY_TRANSACTION = 2000;

function postUserTransaction(req, res) {
    let type = req.body.type;
    let amount = req.body.amount;

    verifyJwt(req, res, (userId) => {
        User.findById(userId, (err, user) => {
            if (err) {
                return sendFailure(res);
            }

            Transaction.create({
                sender: userId,
                receiver: userId,
                amount: amount,
                type: type,
                status: 'pending'
            }, (err, transaction) => {
                if (err) {
                    return sendFailure(res);
                }

                beginTransaction(res, transaction, user.budget);
            });
        });
    });
};

function beginTransaction(res, transaction, budgetId) {
    doTransaction(transaction, (err) => {
        transaction.save((err2, updatedTransaction) => {
            if (err || err2) {
                return sendFailure(res);
            }

            //successful transaction
            Budget.findById(budgetId, (err, budget) => {
                if (err) {
                    return sendFailure(res, true, {
                        info: 'Critical system error! Please contact us for supporting!'
                    });
                }

                if (transaction.type === 'saving') {
                    budget.saving += transaction.amount;
                } else if (transaction.type === 'expense') {
                    budget.expense += transaction.amount;
                }
                budget.save((err, updatedBudget) => {
                    if (err) {
                        return sendFailure(res, true, {
                            info: 'Critical system error! Please contact us for supporting!'
                        });
                    }
                    return sendSuccess(res, true, updatedTransaction);
                });
            });
        });
    });
}

function doTransaction(transaction, cb) {
    if (transaction.amount <= 0 && transaction.amount > MAXIMUM_AMOUNT) {
        transaction.status = 'failure';
        cb(new Error('Sorry, you don\'t have enough money'));
        return;
    } else {
        transaction.status = 'success';
    }
    TotalExchange.findOne({
        sender: transaction.sender,
        receiver: transaction.receiver
    }, (err, totalExchange) => {
        if (err) {
            cb(err);
            return;
        }
        if (!totalExchange) {
            TotalExchange.create({
                sender: transaction.sender,
                receiver: transaction.receiver,
                amount: transaction.amount
            }, (err, totalExchange) => {
                if (err) {
                    cb(err);
                    return;
                }
            });
        } else {
            totalExchange.amount += transaction.amount;
            totalExchange.save((err, updatedTotalExchange) => {
                if (err) {
                    cb(err);
                    return;
                }
            });
        }
    });
    cb();
}

function postGroupTransaction(req, res) {
    let type = 'expense';
    let amount = req.body.amount;
    let groupId = req.body.groupId;

    verifyJwt(req, res, (userId) => {
        Group.findById(groupId, (err, group) => {
            if (err) {
                return sendFailure(res);
            }

            Transaction.create({
                sender: userId,
                receiver: groupId,
                amount: amount,
                type: type,
                status: 'pending'
            }, (err, transaction) => {
                if (err) {
                    return sendFailure(res);
                }

                beginTransaction(res, transaction, group.budget);
            });
        });
    });
};

module.exports = {
    postUserTransaction,
    postGroupTransaction
};