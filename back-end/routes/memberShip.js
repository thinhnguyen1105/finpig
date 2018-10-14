var express = require('express');
var router = express.Router();
const planController = require('../controller/memberShip');

router.post('/:memberShip', planController.postPlan);

module.exports = router;