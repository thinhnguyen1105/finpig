const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankingCardSchema = new Schema({
    cardType: {
        type: String,
        enum: ['visa'],
        required: true
    },
    cardId: {
        type: Number,
        required: true,
    },
    securityCode: {
        type: Number,
        required: true
    }
});

module.exports = BankingCardSchema;