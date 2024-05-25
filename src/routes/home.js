const express = require('express');
const router = express.Router();
const cchome= require('../controller/home.js');


router.get('/', async (req, res) => {
  const usuarioAutenticado = req.isAuthenticated();
  const rolUsuario = usuarioAutenticado ? req.user.rol : null;
  try {
     res.render('gym/index.hbs', { usuarioAutenticado, rolUsuario });
  } catch (error) {
    res.status(500).json({ message: 'Error al renderizar la página de inicio.', error: error.message });
  }
});

module.exports = router;
