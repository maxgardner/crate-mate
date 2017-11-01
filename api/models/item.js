import { Sequelize, DataTypes } from 'sequelize';

module.exports = class Item extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      unitCost: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      shippingCost: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      history: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      notes: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true
      }
    }, { sequelize });
  }

  static associate(db) {
    this.belongsTo(db.Vendor);
  }
}
