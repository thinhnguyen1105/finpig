var express = require('express');
var router = express.Router();
const transactionController = require('../controller/transaction');

router.post('/bank', transactionController.postBank);
router.post('/transfer', transactionController.postTransfer);

module.exports = router;