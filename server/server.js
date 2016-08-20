var express = require('express');
var app = express();
var config = require('./config/variables.express');
var path = require('path');

require('./config/mongoose.connection'); /* Connection to our mongoDB using mongoose */
require('./config/middleware.express')(app); /* Our Express Application Configuration */

app.get('/', function(req, res){
    res.sendFile(path.join(app.get('client'), 'index.html'));
});

require('./config/router.express')(app); /* all routes */

app.listen(config.EXPRESS.PORT, function(){
    console.log(config.EXPRESS.MESSAGE);
});