'use strict';
let mongoose = require('../lib/mongoose'), 
	Schema = mongoose.Schema;


let schema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    cards: {
        type: Array,
        required: true
    }
})

exports.Pile = mongoose.model('Pile', schema);


