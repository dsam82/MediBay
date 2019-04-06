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
    image: { content: Buffer, contentType: String },
    prescription: { content: Buffer, contentType: String }
},
{
    timestamps: true
});

module.exports = mongoose.model('medicine', medicineSchema);