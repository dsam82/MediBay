var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicineSchema = new Schema({
    username: String,
    name: String,
    description: String,
    expiry: String,
    brand: String,
    mrp: String,
    sp: String,
    use: String,
    quantity: String,
    image: String,
    prescription: String
},
{
    timestamps: true
});

module.exports = mongoose.model('medicine', medicineSchema);