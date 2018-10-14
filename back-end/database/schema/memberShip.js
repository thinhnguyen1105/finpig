const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberShipSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    saving: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    cardType: {
        type: String,
        required: true
    },
    timeLimit: {
        type: Number,
        required: true
    }
}, {
    collection: 'MemberShips'
});

module.exports = MemberShipSchema;