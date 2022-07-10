const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const methodOverride = require('method-override')
const session = require('express-session')
//importamos la libreria para sockets
const socketio = require('socket.io')



const app = express();

//importamos el task routes
const tasksRoutes = require('./routes/tasks_routes')
const registrationRoutes = require('./routes/registration_routes')
const sessionsRoutes = require('./routes/sessions_routes')
const categoryRoutes = require('./routes/categories_routes')
const findUserMiddleware = require('./middlewares/find_user')
const AuhtUser = require('./middlewares/auth_user')


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'));

//le indicamos el motor de vistas a nuestra app
app.set('view engine', 'pug');


//montamos las llaves de sesion y montamos las sesiones de usuario
/// saveUnitialized indican se deben guardar sesion al ser inicializda
// resave si se tiene que guardar si no cambia
app.use(session({
    secret: ['sdfajsdfhjldfhsdkjskldfjlsd32','kdljflsdhfjsdhfewooiewlksjdlkjakldjsal'],
    saveUninitialized: false,
    resave: false
}));


app.use(findUserMiddleware);
app.use(AuhtUser);

//montamos la rutas de task
app.use(tasksRoutes);
app.use(categoryRoutes)
app.use(registrationRoutes);
app.use(sessionsRoutes);

app.get('/',(req,res) =>{
    res.render('home', {user: req.user})
});




let server = app.listen(3000);

//inicia la configuracion de sockets
let io = socketio(server)

let usersCount = 0;
//escuchamos el evento de conexion que se va a disparar cuando alguien se conecte al server
io.on('connection', (socket) =>{
    usersCount++;

    io.emit('count_updated', {count: usersCount})


    //cuando se desconecta alguien
    socket.on('disconnect', ()=>{
        usersCount--;
        //emitimos nuestro mensaje en este caso a todos los navegadores conectados
    // el primer argumento de emit es un identificador para que sepa el cliente que es
    // sel segundo son los datos
    io.emit('count_updated', {count: usersCount})
    })
})

// este se importa una vez este levantado el server
const client = require('./realtime/client')
