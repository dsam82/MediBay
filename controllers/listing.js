var medicine = require('../models/medicine');

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
        console.log(medi.name);
    });
    res.render('profile', {user: req.user});
};
