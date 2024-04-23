const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
     res.render('gym/index.hbs');
  } catch (error) {
    res.status(500).json({ message: 'Error al renderizar la página de inicio.', error: error.message });
  }
});

module.exports = router;