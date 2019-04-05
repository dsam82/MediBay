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

module.exports = router;