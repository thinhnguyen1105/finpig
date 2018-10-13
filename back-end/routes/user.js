var express = require('express');
var router = express.Router();
const userController = require('../controller/user');

router.get('/:userId', userController.getUser);
router.get('/:userId/groups', userController.getGroup);

module.exports = router;
