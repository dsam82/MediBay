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

// router.get('/auth/facebook', authController.fbLogin);

// router.get('/auth/facebook/callback', authController.fbLoginCb);

// router.get('/custom', problemController.getCustomTest);

// router.get('/custom/live', function(req, res) {
    // res.redirect('/custom');
// });

// router.post('/custom/live', problemController.postCustom_testLive);

module.exports = router;