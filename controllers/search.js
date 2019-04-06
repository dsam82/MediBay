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
            medicine: null
        });
    });
};

exports.postSearch = function(req, res){
    if (req.body.city=="All India"){
        
    }
    else{
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
    }
};

exports.getImage = function (req, res){
    var filename = req.params.picture;
    medicine.findOne({_id: ObjectId(filename)}, function(err, medi){
        if (err){
            console.log(err);
        }
        res.setHeader('content-type', medi.image.contentType);
        res.send(medi.image.img.buffer);
    });
}