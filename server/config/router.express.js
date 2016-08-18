module.exports = function(app) {
    app.use('/login', require('./passport/auth.passport'));
    app.use('/users', require('../api/user/user.router'));
}