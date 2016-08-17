var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.status(200).json({title: 'Welcome to simple node api'});
});

app.use('/users', require('./api/user/user.router'));


app.listen(3004, function(){
    console.log('listening on port 3004');
});