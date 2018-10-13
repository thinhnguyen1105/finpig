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
        default: mongoose.Types.ObjectId("5bc1ac5021615e0ae40e52a7"),
        required: true
    },
    saving: {
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