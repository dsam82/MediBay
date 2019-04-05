var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var accountSchema = new Schema({
    username: String,
    password: String,
    email: String,
    perms: String,
    city: String,
    phone: String
});

accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('account', accountSchema);