const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const app = express();

//importamos el controlador
const tasks = require('./controllers/task')

app.use(bodyParser.json({
    extended: true
}))

//le indicamos el motor de vistas a nuestra app
app.set('view engine', 'pug');

app.get('/tasks', tasks.home)


//instanciamos a sequelize que se le pasan 3 parametros BD user y password y el 4 es un json de configuracion para la BD
// const sequelize = new Sequelize('demo',null, null,{
//     dialect: 'sqlite',
//     storage: '/.demo'
// });


//intanciamos la BD y le indicamos el nombre
//:memory -> se almacena en memoria
//let db = new sqlite3.Database('demo')

//ejecutar una consulta
//lo ejecutamos y la comentamos para que no exista error
//db.run('CREATE TABLE users(id int AUTO_INCREMENT, nombre varchar(100), correo varchar(100))');


app.post('/save', (rep, res) => {
    db.run("INSERT INTO users(nombre,correo) VALUES('gumaro','test@gmail.com')")
    res.send('se guardo registro');
});




app.listen(3000);

//escucha el proceso y cuando se cierra el navegador
//sigint escucha cuando doy control z que es que termino el server
// process.on('SIGINT', function () {
//     console.log("servidor cerrado")
//     //cerramos la conexion
//     db.close();
//     process.exit();
// })