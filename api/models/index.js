import path from 'path';
import { Sequelize } from 'sequelize';

module.exports = (() => {
  const modules = [
    require('./item.js'),
    require('./user.js'),
    require('./vendor.js')
  ];
  const env = process.env.NODE_ENV || 'development';
  const config = require(`${__dirname}/../config/db.js`)[env];
  let db = {};
  let sequelize;

  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config.options);
  }

  modules.forEach((module) => {
    const model = module.init(sequelize);
    db[model.name] = model;
  });

  Object.keys(db).forEach((model) => {
    if (db[model].associate) {
      db[model].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
})();
