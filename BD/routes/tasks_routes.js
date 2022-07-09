const express = require('express')
const bodyParser = require('body-parser')
let TasksController = require('../controllers/task')

//accedemos al objeto router de express
let router = express.Router();

//le indicamos la ruta y la funcion que lo controla
router.route('/tasks').get(TasksController.index).post(TasksController.create)


router.get('/tasks/new', TasksController.new);

router.get('/tasks/:id/edit', TasksController.edit);

//rutas dinamicas 
router.route('/tasks/:id').get(TasksController.show).put(TasksController.update)
    .delete(TasksController.delete)



module.exports = router;