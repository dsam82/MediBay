var medicine = require('../models/medicine');
var account = require('../models/account');

exports.getSearch = function(req, res){
    console.log(req.body);
    account.find().distinct('city', function(err, city){
        if(err){
            console.log(err);
        }
        city.sort();
        account.find({city: req.body.city}, function(err, acc) {
            if(err){
                console.log(err);
            }
            console.log(acc);

            medicine.find({name: req.body.query}, function(err, med){
                console.log(med);
                if(err){
                    console.log(err);
                }

                res.render('search', {
                        user: req.user,
                        city: city,
                        medicine: med
                });
            });
        });
    });
};
