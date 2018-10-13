const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankingCardSchema = new Schema({
    cardType: {
        type: String,
        enum: ['visa'],
        required: true
    },
    cardId: {
        type: String,
        required: true,
    },
    securityCode: {
        type: String,
        required: true
    }
});

module.exports = BankingCardSchema;