var express = require('express');
var router = express.Router();

var profileController = require('../controllers/profile');

router.get('/', function(req, res) {
    res.render('profile', {user: req.user});
});

router.get('/profile', profileController.getUserMedicine);

module.exports = router;