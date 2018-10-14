var express = require('express');
var router = express.Router();
const planController = require('../controller/memberShip');

router.get('/', planController.getPlan);
router.post('/:memberShip', planController.postPlan);

module.exports = router;