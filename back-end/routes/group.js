var express = require('express');
var router = express.Router();
const groupController = require('../controller/group');

router.get('/:groupId', groupController.getGroup);
router.post('/', groupController.postGroup);

module.exports = router;