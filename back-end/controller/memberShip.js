const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

const PLAN = {
    silve: {
        total: 5000000,
        saving: 1000000,
        timeLimit: 30
    },
    gold: {
        total: 10000000,
        saving: 2000000,
        timeLimit: 30
    },
    diamond: {
        total: 15000000,
        saving: 3000000,
        timeLimit: 30
    },
}

async function postPlan(req, res) {
    switch (req.params.memberShip) {
        case 'silver':
            purchase(req, res, PLAN.silve);
            break;
        case 'gold':
            purchase(req, res, PLAN.gold);
            break;
        case 'diamond':
            purchase(req, res, PLAN.diamond);
            break;
        default:
            return sendFailure(res, true, {
                info: "No such plan"
            });
    }
}

async function purchase(req, res, plan) {
    verifyJwt(req, res, async (userId) => {
        try {
            let user = await User.findById(userId);
            let budget = await Budget.findById(user.budget);
            if (budget.balance < plan.total) {
                return sendFailure(res, true, {
                    info: 'Sorry, you don\t have enough money to purchase this card'
                });
            }
            budget.balance -= plan.total;
            budget.expense += plan.total;
            budget.saving += plan.saving;
            budget = await budget.save();
            return sendSuccess(res, true, {
                budget: budget,
                plan: plan
            });
        } catch (err) {
            return sendFailure(res);
        }
    });
}

module.exports = {
    postPlan
};