var express = require('express');
var router = express.Router();
const planController = require('../controller/memberShip');

router.get('/', planController.getPlanType);
router.post('/', planController.postPlan);
router.get('/:memberShipId', planController.getPlan);

module.exports = router;