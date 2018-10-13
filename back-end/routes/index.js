const { join } = require('path');
const BASE_URL = '/api/v1/';
const userRoute = require('./user');
const authRoute = require('./auth');

function setup(app) {
  app.use(BASE_URL + 'user', userRoute);
  app.use(BASE_URL + 'auth', authRoute);
}

module.exports = setup;
