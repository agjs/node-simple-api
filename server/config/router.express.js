module.exports = function(app) {
    app.use('/users', require('../api/user/user.router'));
}