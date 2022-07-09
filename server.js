//variable para obtener express
const express = require('express');
const bodyParser = require('body-parser');

//puede espeficar las rutas y que respuesta dar
const app = express();
//le indicamos a la app que use body parse para como parter de express para leer el cuerpo de una peticion en urlEncode
app.use( bodyParser.urlencoded({extended: true}))


//saludar a traves de un queryparam
app.get('/saludar',(req,res)=>{
    res.send(`Hola ${req.query.name}`)
});

//endPoint de tipo post
app.post('/saludar-body', (req,res)=>{
    res.send(`Hola ${req.body.name}`)
});

app.listen(3000);

