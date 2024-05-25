// helpers/ifEquals.js

const Handlebars = require('handlebars');

// Helper para comparar si dos valores son iguales
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

module.exports = Handlebars;
