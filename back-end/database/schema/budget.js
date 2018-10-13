const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema ({
    owner: {
        type: Schema.Types.ObjectId,
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