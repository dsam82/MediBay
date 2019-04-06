var medicine = require('../models/medicine');

exports.getMedicine = function(req, res){
    medicine.findOne({_id: req.params.id}, function(err, med) {

        // med.sort(function(a,b){
        //     return a.createdAt - b.createdAt;
        // });
        console.log(med);

        if(err){
            console.log(err);
        }
        res.render('medicine', {
            user: req.user,
            medicine: med
        });
    });
};