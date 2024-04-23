const express = require('express');
const mainRouter= express.Router();
const bodyparser = require('body-parser');
mainRouter.use(bodyparser.urlencoded({ extended: true }));

module.exports= function(app){  
    // app.use("/", require("./auth"));
    app.use("/", require("./home.js"));  
    app.use("/", require("./auth"));
}