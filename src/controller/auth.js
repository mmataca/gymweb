// const Usuario = require('../model/Usuario');
const passport = require('passport');

exports.loginController = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    
    }
    if (!user) {
    console.log("infomess: " + info.message);
    return res.render('gym/errs/loginErr.hbs',{message: info.message});

    }
    req.login(user, function(err) {
      if (err) { 
        return next(err); 
      }

      // return res.redirect('/mi-cuenta');
        console.log("Exito en login");
        res.render("gym/user/mi-cuenta.hbs");
 
    });

  }) (req, res, next);
};

exports.logoutController = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    req.session.destroy((destroyErr) => {
      if (destroyErr) {
        console.error(destroyErr);
        return res.status(500).send('Internal Server Error');
      }
      res.redirect('/');
    });
  });
};
