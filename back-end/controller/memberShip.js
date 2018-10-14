const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');
const User = mongoose.model('User');
const MemberShip = mongoose.model('MemberShip');
const jwt = require('jsonwebtoken');
const { sendFailure, sendSuccess, verifyJwt } = require('./helper');

const PLAN = {
    silver: {
        total: 5000000,
        saving: 1000000,
        purchaseDate: Date.now(),
        cardType: 'silver',
        timeLimit: 30
    },
    gold: {
        total: 10000000,
        saving: 2000000,
        purchaseDate: Date.now(),
        cardType: 'gold',
        timeLimit: 30
    },
    diamond: {
        total: 15000000,
        saving: 3000000,
        purchaseDate: Date.now(),
        cardType: 'diamond',
        timeLimit: 30
    },
}

async function getPlanType(req, res) {
    verifyJwt(req, res, (userId) => {
        sendSuccess(res, true, PLAN);
    });
}

async function getPlan(req, res) {
    let memberShipId = req.params.memberShipId;
    verifyJwt(req, res, async (userId) => {
        let memberShip = await MemberShip.findById(memberShipId);
        sendSuccess(res, true, memberShip);
    });
}

async function postPlan(req, res) {
    switch (req.body.cardType) {
        case 'silver':
            purchase(req, res, PLAN.silver);
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
                    info: 'Sorry, you don\'t have enough money to purchase this card'
                });
            }
            budget.balance -= plan.total;
            budget.expense += plan.total;
            budget.saving += plan.saving;
            budget = await budget.save();

            let purchasedMemberShip = user.purchasedMemberShip;
            if (!purchasedMemberShip) {
                purchasedMemberShip = [];
            }

            let memberShip = await MemberShip.create(plan);
            purchasedMemberShip.push(memberShip);
            user.purchasedMemberShip = purchasedMemberShip;

            user = await user.save();
            return sendSuccess(res, true, memberShip);
        } catch (err) {
            return sendFailure(res);
        }
    });
}

module.exports = {
    getPlan,
    getPlanType,
    postPlan
};