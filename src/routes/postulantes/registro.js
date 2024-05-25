const express = require('express');
const router = express.Router();

router.get('/registro', (req, res) => {
    res.render('gym/postulantes/registro.hbs');
});
module.exports = router;
