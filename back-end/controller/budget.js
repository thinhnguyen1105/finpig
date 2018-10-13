const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

function getBudget(req, res) {
    let budgetId = req.params.budgetId;
    verifyJwt(req, res, (userId) => {
        Budget.findById(budgetId, (err, budget) => {
            if (err) {
                return sendFailure(res);
            }
            return sendSuccess(res, true, budget);
        });
    });
};

module.exports = {
    getBudget
};