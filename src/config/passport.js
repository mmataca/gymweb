const session = require('express-session');
const passport = require('passport');
const initializePassport = require('../lib/passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports=function(app){
    initializePassport(passport);
    app.use(session({ secret: 'secret-key', resave: true, saveUninitialized: true })); //from false to true
    app.use(passport.initialize());
    app.use(passport.session());

    return passport;
}