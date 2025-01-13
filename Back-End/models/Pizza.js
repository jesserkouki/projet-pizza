const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    Method: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    Size: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    Crust: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    Quantity: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
      Toppings: {
        type: Map,
        of:Boolean,
        required: true,
       
    },
    Price: {
        type: Number, 
        required: true,
        
      },
},
{ timestamps: true } 
);
module.exports = mongoose.model('Pizza', pizzaSchema);