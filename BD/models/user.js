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
      User.hasMany(models.Task,{
        as: 'tasks'
      });
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false

    },
    password: DataTypes.STRING,
    password_virtual: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });

  User.login = function(email,password){
    return User.findOne({
      where: {
        email: email
      }
    }).then(user =>{
      if(!user){
        return null;
      }
      return user.authenticatePassword(password).then(valid =>{
        if(valid) {
          return user;
        } 
        return null;
      });
    });
  };

  User.prototype.authenticatePassword = function(password){
    return new Promise((res, rej)=>{
      bcrypt.compare(password,this.password, function(err, valid){
        if(err) return rej(err);  
        res(valid)
      })
    })
    
  }

  User.beforeCreate((user, options) => {
    return new Promise((res,rej)=>{
      if (user.password_virtual) {
        bcrypt.hash(user.password_virtual, 10, function(error, hash) {
          user.password = hash;
          res();
        })
      }
    })
  })
return User;
};