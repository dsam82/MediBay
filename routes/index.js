var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth');

router.get('/', function(req, res) {
    res.render('index', {user: req.user});
});

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

router.get('/logout', authController.getLogout);

router.get('/register', function(req, res) {
    res.render('register');
});

router.post('/register', authController.postRegister);

router.get('/update', function(req, res) {
    res.render('update', {user: req.user});
});

// router.post('/update', authController.updateProfile);
module.exports = router;