var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');

module.exports = function(app) {

    require('./passport/local.passport_strategy');

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    
    app.use(bodyParser.json());
    app.use(session({
        secret: 'dylan the dunne',
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    require('./passport/sessions.passport')();

}