var express = require('express');
var router = express.Router();
const groupController = require('../controller/group');

router.post('/', groupController.postGroup);
router.get('/:groupId', groupController.getGroup);
router.put('/:groupId', groupController.putGroup);

module.exports = router;