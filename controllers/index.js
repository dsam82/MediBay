var account = require('../models/account');

exports.getIndex = function(req, res){
    account.find().distinct('city', function(err, city){
        city.sort();
        if (err){
            console.log(err);
        }
        res.render('index', {
            user: req.user, 
            city: city
        });
    });
};
