'use strict'

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const initExpress = (app) => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // method-override
  app.use(methodOverride());

  app.use(function (req, res, next) {
    req.resources = req.resources || {};
    next();
  });
}

//used for general middlewares
module.exports = {
  initExpress,
}
