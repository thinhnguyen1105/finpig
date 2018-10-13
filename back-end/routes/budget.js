var express = require('express');
var router = express.Router();
const budgetController = require('../controller/budget');

router.get('/:budgetId', budgetController.getBudget);

module.exports = router;