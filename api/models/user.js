import { Sequelize, DataTypes } from 'sequelize';

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      first_name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      last_name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
           len: [1]
         }
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
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
      hash: {
       type: DataTypes.STRING.BINARY,
       allowNull: false
      },
      salt: {
       type: DataTypes.STRING.BINARY
      }
    }, { sequelize });
  }

  validPassword(password) {
    return bcrypt.compare(password, this.hash, function() {});
  }

  beforeCreate(user, options, cb) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        throw err;
      }
      user.salt = salt;
      user.hash = bcrypt.hash(user.password, bcrypt.genSaltSync(10, ), null, (error, hash) => {
        if (err) {
          throw err;
        }
        cb(null, options);
      });
    });
  }
}
