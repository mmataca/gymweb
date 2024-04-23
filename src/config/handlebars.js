const exphbs = require('express-handlebars');
const path = require('path');

//const handlebarsHelpers = require('../helpers/handlebars-help');

module.exports = function (app) {
  const hbs = exphbs.create({
    // helpers: handlebarsHelpers,
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  });

  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
};