const express = require('express');
const router = express.Router();
const ccauth= require('../controller/auth.js');

router.get('/login', (req, res) => { res.render('gym/login.hbs');})
router.post('/login', ccauth.loginController);



module.exports = router;