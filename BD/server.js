const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const methodOverride = require('method-override')
const session = require('express-session')

const app = express();

//importamos el task routes
const tasksRoutes = require('./routes/tasks_routes')
const registrationRoutes = require('./routes/registration_routes')
const sessionsRoutes = require('./routes/sessions_routes')
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
app.use(registrationRoutes);
app.use(sessionsRoutes);

app.get('/',(req,res) =>{
    res.render('home', {user: req.user})
});


app.listen(3000);

