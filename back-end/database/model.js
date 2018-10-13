const mongoose = require('mongoose');
const {
    UserSchema,
    GroupSchema,
    OwnerSchema,
    BudgetSchema,
    TransactionSchema
} = require('./schema');

mongoose.model('User', UserSchema);
mongoose.model('Group', GroupSchema);
mongoose.model('Budget', BudgetSchema);
mongoose.model('Transaction', TransactionSchema);
mongoose.model('Owner', OwnerSchema);