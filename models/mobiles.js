var mongoose = require('mongoose');
var joi = require('@hapi/joi');
var mobSchema =  mongoose.Schema({
    name: String,
    price: Number,
    RAM: String,
    ROM: String
});

var Mob = mongoose.model('Mob', mobSchema);

function validateProduct(data){
    const schema = joi.object({
        name: joi.string().min(2).required(),
        price: joi.number().min(0).required(),
        RAM: joi.string().required(),
        ROM: joi.string().required()
    });
    return schema.validate(data,{abortEarly: false});

}

module.exports.Mobile = Mob;
module.exports.validate = validateProduct;