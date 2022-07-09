'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_hash: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, options) => {
    return new Promise((res,rej)=>{
      if (user.password) {
        bcrypt.hash(password, 10, (error, hash) => {
          //atributos vituales que se utilizan pero no en BD
          user.password = hash;
        })
      }  
    })
  })
}
return User;
};