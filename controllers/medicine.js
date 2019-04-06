var medicine = require('../models/medicine');
var account = require('../models/account');
exports.getMedicine = function(req, res){
    medicine.findOne({_id: req.params.id}, async function(err, med) {

        // med.sort(function(a,b){
        //     return a.createdAt - b.createdAt;
        // });
        console.log(med);
        var x = '9418165156';
        await account.find({username: med.username}, function(err, acc){
            console.log(acc);
            x = acc.phone;
        });
        if(err){
            console.log(err);
        }
        console.log(x);
        await res.render('medicine', {
            user: req.user,
            medicine: med,
            contact: x
        });
    });
};