const exphbs = require('express-handlebars');
const path = require('path');

const navbarHelpers = require('../helpers/navbarHelpers');
const ifEqualsHelper = require('../helpers/ifEqualsHelper');

module.exports = function (app) {
  const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: {

      ifEqualsHelper,  
      navbarHelpers
      
  }
  });

  app.engine('.hbs', hbs.engine);
  app.set('view engine', '.hbs');
};