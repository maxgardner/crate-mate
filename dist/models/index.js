'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var modules = [require('./item.js'), require('./user.js'), require('./vendor.js')];
  var env = process.env.NODE_ENV || 'development';
  var config = require(__dirname + '/../config/db.js')[env];
  var db = {};
  var sequelize = void 0;

  if (config.use_env_variable) {
    sequelize = new _sequelize.Sequelize(process.env[config.use_env_variable]);
  } else {
    sequelize = new _sequelize.Sequelize(config.database, config.username, config.password, config.options);
  }

  modules.forEach(function (module) {
    var model = module.init(sequelize);
    db[model.name] = model;
  });

  Object.keys(db).forEach(function (model) {
    if (db[model].associate) {
      db[model].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = _sequelize.Sequelize;

  return db;
}();