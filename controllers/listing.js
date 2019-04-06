var medicine = require('../models/medicine');
var fs = require('fs');
exports.addListing = function(req, res){
    console.log(req.body);
    var med = new medicine({
        username: req.user.username,
        name: req.body.name,
        description: req.body.description,
        expiry: req.body.expiry,
        brand: req.body.brand,
        mrp: req.body.mrp,
        sp: req.body.sp,
        use: req.body.use,
        quantity: req.body.quantity,
        image: req.body.image,
        prescription: req.body.prescription
    });
    med.save(function(err, medi) {
        if (err) {
            console.log(err);
        }
        console.log(medi._id);
    });
    res.render('profile', {user: req.user});
};

exports.getListing = function(req, res){
    medicine.find({}, function(err, med) {

        // med.sort(function(a,b){
        //     return a.createdAt - b.createdAt;
        // });
        console.log(med);

        if(err){
            console.log(err);
        }
        res.render('market', {
            user: req.user,
            medicine: med
        });
    });
};
