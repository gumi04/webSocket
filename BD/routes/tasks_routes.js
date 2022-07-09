const express = require('express')

//accedemos al objeto router de express
let router = express.Router();

//le indicamos la ruta y la funcion que lo controla
router.route('/tasks').get((req, res) => {
    res.send("hola mundo desde ruta")
}).post((req, res) => {})

module.exports = router;