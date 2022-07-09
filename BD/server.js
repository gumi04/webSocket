const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json({
    extended: true
}))

//intanciamos la BD y le indicamos el nombre
//:memory -> se almacena en memoria
let db = new sqlite3.Database('demo')

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
process.on('SIGINT', function () {
    console.log("servidor cerrado")
    //cerramos la conexion
    db.close();
    process.exit();
})