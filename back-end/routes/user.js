var express = require('express');
var router = express.Router();
const userController = require('../controller/user');

router.get('/:userId', userController.getUser);

module.exports = router;
