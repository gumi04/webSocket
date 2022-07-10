const { response } = require('express');

//asi se importan modelo con sequelize la carptea y no un archivo
const Task = require('../models').Task
const User = require('../models').User

//exportamos los modulos que aqui van los controladores
module.exports = {
    index: (req,res)=>{
        Task.findAll().then(function(tasks){
            res.render('tasks/index',{tasks: req.user.tasks})
        });
    },
    create: (req,res) =>{
        Task.create({
            description: req.body.description,
            userId: req.user.id
        }).then(result =>{
            res.json(result);
        }).catch(err =>{
            console.log(err);
            res.json(err);
        })
    },
    new: (req,res) =>{
        res.render('tasks/new');
    },
    show: (req,res) =>{
        Task.findByPk(req.params.id,{
                include: [
                    {
                    model: User,
                    as: 'user'
                }
                ]
            }).then(function(tarea){
                res.render('tasks/show',{tarea})
        })
    },
    update: (req,res) =>{
        Task.update({description: req.body.description},{
            where: {
                id: req.params.id
            }
        }).then(data =>{
            res.redirect('/tasks/'+req.params.id)
        })
    },
    edit: (req,res) =>{
        Task.findAll({
            where:{
                id: req.params.id
            }}).then(function(tarea){
                res.render('tasks/edit',{tarea:tarea[0]})
        })
    },
    delete: (req,res) =>{
        Task.destroy({
            where:{
                id: req.params.id
            }}).then(function(resDelete){
                res.redirect('/tasks')
            })
    }
};