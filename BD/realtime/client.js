const io = require('socket.io-client')

//indicamos la url y que intente la reconeccion si es que se cae
let socket = io.connect('http://localhost:3000',{ reconnection: true});

socket.on('connect', ()=>{
    console.log("\n\n Socket conectada al servidor mismo from Nodejs\n\n");
})

module.exports = socket;