'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _sequelize = require('sequelize');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Sequelize$Model) {
  _inherits(Vendor, _Sequelize$Model);

  function Vendor() {
    _classCallCheck(this, Vendor);

    return _possibleConstructorReturn(this, (Vendor.__proto__ || Object.getPrototypeOf(Vendor)).apply(this, arguments));
  }

  _createClass(Vendor, null, [{
    key: 'init',
    value: function init(sequelize) {
      return _get(Vendor.__proto__ || Object.getPrototypeOf(Vendor), 'init', this).call(this, {
        id: {
          type: _sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: _sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        email: {
          type: _sequelize.DataTypes.STRING,
          allowNull: true,
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
        notes: {
          type: _sequelize.DataTypes.ARRAY(_sequelize.DataTypes.JSONB),
          allowNull: true
        }
      }, { sequelize: sequelize });
    }
  }]);

  return Vendor;
}(_sequelize.Sequelize.Model);