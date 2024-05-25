const express = require('express');
const router = express.Router();
const { verificarAutenticado } = require('../../middlewares/auth');
const { verificarRol } = require('../../middlewares/auth');

//Ejemplo de autenticación y autorización
// router.get('/mi-cuenta', verificarAutenticado, verificarRol(1),  (req, res) => {
//     res.render('gym/user/mi-cuenta.hbs');
// });
router.get('/mi-cuenta', verificarAutenticado, verificarRol(1),  (req, res) => {
    res.render('gym/user/mi-cuenta.hbs');
});

module.exports = router;
