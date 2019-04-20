var medicine = require('../models/medicine');
var account = require('../models/account');
exports.getMedicine = function(req, res){
    medicine.findOne({_id: req.params.id}, async function(err, med) {
        var x="";
        await account.findOne({username: med.username}, async function(err, acc){
            console.log(acc.phone);
            x = acc.phone;
        });
        if(err){
            console.log(err);
        }
        console.log(x);
        res.render('medicine', {
            user: req.user,
            medicine: med,
            contact: x
        });
    });
};