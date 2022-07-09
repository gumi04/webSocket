//asi se importan modelo con sequelize la carptea y no un archivo
const Task = require('../models').Task

//exportamos los modulos que aqui van los controladores
module.exports = {
    home: function(req,res){
        //obtener los registros de toda la tabla
        //le indicamos la vista a mostrar seguido de los valores
        Task.findAll().then(function(tasks){
            res.render('tasks/index',{tasks: tasks})
        });
    }
};