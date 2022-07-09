const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const methodOverride = require('method-override')

const app = express();

//importamos el task routes
const tasksRoutes = require('./routes/tasks_routes')


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'));

//le indicamos el motor de vistas a nuestra app
app.set('view engine', 'pug');
//montamos la rutas de task
app.use(tasksRoutes);



app.listen(3000);

