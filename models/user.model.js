'use strict';
let mongoose = require('../lib/mongoose'), 
	Schema = mongoose.Schema;


let schema = new Schema({
    userId: {

    },
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    eMail: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

exports.User = mongoose.model('User', schema);


