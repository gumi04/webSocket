//variable para obtener express
const express = require('express');
const bodyParser = require('body-parser');

//puede espeficar las rutas y que respuesta dar
const app = express();


//para indicarle a nuestra app se le indica el motor de vista
//el primero le indica que montaremos un motor de vista el segundo le indicamos cual es
app.set('view engine', 'ejs');

//para pasar archivos estaticos se indica a express para configurarlo se le indica la carpeta
// crea un middleware para el sctack del framework .use
// se le puede dar una ruta para que el cliente los consuma y no choque con los endpoints
app.use('/assets',express.static('assets',{
    //se pone en falso el etag en el cache esto para que lo genere y se almacene en el cache
    //max age le indica al cache cuanto tiene que durar un recurso
    etag : false,
    maxAge: '5h'
})); //middleware

//le indicamos a la app que use body parse para como parter de express para leer el cuerpo de una peticion en urlEncode
app.use( bodyParser.urlencoded({extended: true}));

//home
app.get('/', (req,res)=>{
    //sin motor de vista
    //se tiene que especificar mediante un json o en duro
    // __dirname contiene el path del proyecto
    // res.sendFile('index.html',{
    //     root: __dirname
    // })
    res.render('index');
    //con motor de vistas
});


//saludar a traves de un queryparam
app.get('/saludar',(req,res)=>{
    res.send(`Hola ${req.query.name}`)
});



//endPoint de tipo post
app.post('/saludar-body', (req,res)=>{
    res.send(`Hola ${req.body.name}`)
});

app.listen(3000);

