import { Sequelize, DataTypes } from 'sequelize';

module.exports = class Vendor extends Sequelize.Model {
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
      email: {
         type: DataTypes.STRING,
         allowNull: true,
         unique: true,
         validate: {
           len: [1],
           isEmail: true
         }
      },
      phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [10]
        }
      },
      notes: {
       type: DataTypes.ARRAY(DataTypes.JSONB),
       allowNull: true
      }
    }, { sequelize });
  }
};
