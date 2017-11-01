'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sequelize = require('sequelize');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Sequelize$Model) {
  _inherits(User, _Sequelize$Model);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'validPassword',
    value: function validPassword(password) {
      return bcrypt.compare(password, this.hash, function () {});
    }
  }, {
    key: 'beforeCreate',
    value: function beforeCreate(user, options, cb) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          throw err;
        }
        user.salt = salt;
        user.hash = bcrypt.hash(user.password, bcrypt.genSaltSync(10), null, function (error, hash) {
          if (err) {
            throw err;
          }
          cb(null, options);
        });
      });
    }
  }], [{
    key: 'init',
    value: function init(sequelize) {
      return _get(User.__proto__ || Object.getPrototypeOf(User), 'init', this).call(this, {
        uuid: {
          type: _sequelize.DataTypes.UUID,
          defaultValue: _sequelize.Sequelize.UUIDV1,
          allowNull: false,
          primaryKey: true
        },
        first_name: {
          type: _sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        last_name: {
          type: _sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        email: {
          type: _sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: [1],
            isEmail: true
          }
        },
        phone_number: {
          type: _sequelize.DataTypes.INTEGER,
          allowNull: true,
          validate: {
            len: [10]
          }
        },
        hash: {
          type: _sequelize.DataTypes.STRING.BINARY,
          allowNull: false
        },
        salt: {
          type: _sequelize.DataTypes.STRING.BINARY
        }
      }, { sequelize: sequelize });
    }
  }]);

  return User;
}(_sequelize.Sequelize.Model);