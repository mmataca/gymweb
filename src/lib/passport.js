const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');
const Usuario = require('../model/Usuario.js');

function initialize(passport) {
  const authenticateUser = async (username, pass, done) => {
    const myuser = await Usuario.getByUsername(username);
    
    if (myuser == null) {
      return done(null, false, {message: 'No usuario con ese nombre.' });
    }
  
    try {
      if (pass === myuser.pass) {
        return done(null, myuser);
      } else {
   
        return done(null, false, { message: 'Usuario existe. Contraseña incorrecta.' });
      }
    } catch (err) {
      return done(err);
    }
  }
  
  passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, { id: user.id }));
  passport.deserializeUser(async (user, done) => {
    try {
      const retrievedUser = await Usuario.getById(user.id);
      done(null, { ...retrievedUser });
    } catch (err) {
      done(err);
    }
  });

}
module.exports = initialize;