const hhtp = require('http')

//funcion a utilizar cada vez que la consultamos
function responderRequest(request, response) {
    response.end("hola mundo")
}

//creamos el servidor
let server = hhtp.createServer(responderRequest);


//el puerto de nuestro servidor
server.listen(3000);


