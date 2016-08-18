var express = require('express');
var app = express();
var config = require('./config/variables.express');

require('./config/mongoose.connection'); /* Connection to our mongoDB using mongoose */

require('./config/middleware.express')(app); /* Our Express Application Configuration */


app.get('/', function(req, res){
    res.status(200).json({title: 'Welcome to simple node api'});
});


require('./config/router.express')(app); /* all routes */

app.listen(config.EXPRESS.PORT, function(){
    console.log(config.EXPRESS.MESSAGE);
});