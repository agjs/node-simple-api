var mongoose = require('mongoose');
var config = require('../config/variables.express');

mongoose.connect(config.MONGODB.URL);

var database = mongoose.connection;
database.on('error', console.error.bind(console, config.MONGODB.FAILED_MESSAGE));
database.once('open', function() {
    console.log(config.MONGODB.CONNECTED_MESSAGE);
});