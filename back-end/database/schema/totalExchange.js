const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TotalExchangeSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    amount: {
        type: Number,
        default: 0,
        required: true
    },
    status: {
        type: String,
        enum: ['success', 'failure', 'pending']
    }
}, {
    collection: 'TotalExchanges'
});

module.exports = TotalExchangeSchema;