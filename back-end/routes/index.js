const BASE_URL = '/api/v1/';
const userRoute = require('./user');
const authRoute = require('./auth');
const groupRoute = require('./group');
const budgetRoute = require('./budget');

function setup(app) {
  app.use(BASE_URL + 'user', userRoute);
  app.use(BASE_URL + 'auth', authRoute);
  app.use(BASE_URL + 'group', groupRoute);
  app.use(BASE_URL + 'budget', budgetRoute);
}

module.exports = setup;
