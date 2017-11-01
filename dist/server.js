'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routeHelpers = require('./dist/utils/route-helpers');

var _models = require('./dist/models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');
// import authCheckMiddleware from 'config/auth';


var port = process.env.PORT || 3001;
var app = (0, _express2.default)();

// Express middleware
app.use(_express2.default.static(_path2.default.join(__dirname, 'build/public')));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _methodOverride2.default)('X-HTTP-Method-Override'));
app.use((0, _methodOverride2.default)('X-Method-Override'));
app.use(_routeHelpers.asyncAll);
// app.use(authChecker);
app.use(_routeHelpers.errorHandler);

// Import routes
require('./dist/routes/index')(app, _models2.default);

// Set up database connection
_models2.default.sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.error('Unable to connect to the database:', err);
});'';

app.listen(port, function (err) {
  if (err) throw err;
  console.log('Server is running on ' + port);
});