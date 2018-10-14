const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema ({
    ownerType: {
        type: String,
        enum: ['user', 'group'],
        required: true
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    saving: {
        type: Number,
        default: 0,
        required: true
    },
    balance: {
        type: Number,
        default: 0,
        required: true
    },
    expense: {
        type: Number,
        default: 0,
        required: true
    }
}, {
    collection: 'Budgets'
})

module.exports = BudgetSchema;