var medicine = require('../models/medicine');

exports.getUserMedicine = function(req, res){
    console.log(req.user);

    medicine.find({username: req.user.username}, function(err, medi){
        if(err){
            console.log(err);
        }

        console.log(medi);
        res.render('profile', {
            user: req.user,
            medicine: medi
        });
    });
};

exports.delUserMedicine = function(req, res){
    console.log(req.user);

    medicine.deleteOne({_id: req.params.id}, function(err) {
        console.log(res);

        if(err){
            console.log(err);
        }

        res.redirect('back');
    })
}