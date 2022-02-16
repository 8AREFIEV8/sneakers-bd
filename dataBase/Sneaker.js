const {Schema, model} = require('mongoose');

const sneakerSchema = new Schema({

    model: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    }

}, {timestamps: true});

module.exports = model('sneaker', {sneakerSchema});