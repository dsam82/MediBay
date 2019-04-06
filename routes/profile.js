var express = require('express');
var router = express.Router();

var profileController = require('../controllers/profile');

router.get('/', profileController.getUserMedicine);

module.exports = router;