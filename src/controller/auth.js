const passport = require('passport');
exports.loginController = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Error del servidor. Por favor, inténtelo de nuevo.' });
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.login(user, function(err) {
      if (err) { 
        return res.status(500).json({ message: 'Error al iniciar sesión. Por favor, inténtelo de nuevo.' });
      }
      res.status(200).json({ message: 'Inicio de sesión exitoso', redirect: '/mi-cuenta' }); 
    });
  })(req, res, next);
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
