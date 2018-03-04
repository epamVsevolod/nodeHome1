'use strict';
const mongoose = require('mongoose');
const config = require('config');

mongoose.connection.openUri(config.get('mongoose.uri'), config.get('mongoose.options'));

mongoose.promise = global.promise

module.exports = mongoose;