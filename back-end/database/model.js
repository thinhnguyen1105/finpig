const mongoose = require('mongoose');
const {
    UserSchema,
    GroupSchema,
    BudgetSchema,
    BankingCardSchema,
    TransactionSchema,
    TotalExchangeSchema,
} = require('./schema');

mongoose.model('User', UserSchema);
mongoose.model('Group', GroupSchema);
mongoose.model('Budget', BudgetSchema);
mongoose.model('BankingCard', BankingCardSchema);
mongoose.model('Transaction', TransactionSchema);
mongoose.model('TotalExchange', TotalExchangeSchema);