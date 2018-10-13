var express = require('express');
var router = express.Router();
const transactionController = require('../controller/transaction');

router.post('/user', transactionController.postUserTransaction);
router.post('/group', transactionController.postGroupTransaction);

module.exports = router;