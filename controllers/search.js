var medicine = require('../models/medicine');
var account = require('../models/account');

exports.getSearch = function(req, res){
    console.log(req.body);
    account.find().distinct('city', function(err, city){
        city.sort();
        if (err){
            console.log(err);
        }
        res.render('search', {
            user: req.user, 
            city: city,
            results: res
        });
    });
};
