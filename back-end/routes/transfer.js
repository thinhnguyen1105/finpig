var express = require('express');
var router = express.Router();
const transferController = require('../controller/transfer');

router.get('/', transfer);

module.exports = router;