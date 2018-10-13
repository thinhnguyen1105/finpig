const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankingCardSchema = new Schema({
    fullName: {
        type: String
    },
    cardType: {
        type: String,
    },
    cardId: {
        type: String,
    },
    securityCode: {
        type: String,
    }
}, {
    collection: 'BankingCards'
});

module.exports = BankingCardSchema;