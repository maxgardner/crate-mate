'use strict';

var _express = require('express');

module.exports = function (app, db) {
  var router = (0, _express.Router)();
  var apiRoutes = [require('./item')];

  apiRoutes.forEach(function (route) {
    route(router, db);
  });

  app.use(router);
  return app;
};