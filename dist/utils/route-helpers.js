'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setApiPath = exports.setApiPath = function setApiPath(routePath) {
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (optional === false) {
    return '/api/' + routePath + '/' + param;
  }
  return '/api/' + routePath + '/:' + param;
};

var authChecker = exports.authChecker = function authChecker(req, res, next) {
  if (req.user) {
    return next();
  }
  res.redirect('/login');
};

// From https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
var asyncAll = exports.asyncAll = function asyncAll(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

var errorHandler = exports.errorHandler = function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.json({
    error: err
  });
  return next(err);
};