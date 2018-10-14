const BASE_URL = '/api/v1/';
const userRoute = require('./user');
const authRoute = require('./auth');
const groupRoute = require('./group');
const budgetRoute = require('./budget');
const transactionRoute = require('./transaction');
const memberShipRoute = require('./memberShip');

function setup(app) {
  app.use(BASE_URL + 'user', userRoute);
  app.use(BASE_URL + 'auth', authRoute);
  app.use(BASE_URL + 'group', groupRoute);
  app.use(BASE_URL + 'budget', budgetRoute);
  app.use(BASE_URL + 'transaction', transactionRoute);
  app.use(BASE_URL + 'member_ship', memberShipRoute);
}

module.exports = setup;
