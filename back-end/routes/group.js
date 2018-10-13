var express = require('express');
var router = express.Router();
const groupController = require('../controller/group');

router.get('/:groupId', groupController.getGroup);

module.exports = router;