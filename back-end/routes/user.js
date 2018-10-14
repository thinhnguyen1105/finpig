var express = require('express');
var router = express.Router();
const userController = require('../controller/user');

router.get('/:userId', userController.getUser);
router.put('/:userId', userController.putUser);
router.get('/:userId/groups', userController.getGroup);
router.get('/:userId/member_ships', userController.getMemberShip);

module.exports = router;
