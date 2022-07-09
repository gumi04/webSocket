//variable para obtener express
const express = require('express');

//puede espeficar las rutas y que respuesta dar
const app = express();


//endpoint
app.get('/mundo',(req,res)=>{
    res.send('Hola Mundo')
})

app.listen(3000);

