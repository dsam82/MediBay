var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth');
var listingController = require('../controllers/listing');
var indexController = require('../controllers/index');
var searchController = require('../controllers/search');

router.get('/', indexController.getIndex);

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

router.get('/addlisting', function(req, res) {
    res.render('addlisting', {user: req.user});
});

router.get('/market', function(req, res) {
    res.render('market', {user: req.user});
});

router.get('/about', function(req, res) {
    res.render('about', {user: req.user});
});

router.get('/search', indexController.getIndex);

router.post('/update', authController.updateProfile);

router.post('/addlisting', listingController.addListing);

router.post('/search', searchController.getSearch);

module.exports = router;