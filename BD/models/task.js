'use strict';
const {
  Model
} = require('sequelize');
const { id } = require('../realtime/client');
const socket = require('../realtime/client');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User,{
        as:'user'
      });
    }
  }
  Task.init({
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Task',
  });

  Task.afterCreate(function(task, options){
    socket.emit('new_task',task)
  })
  return Task;
};