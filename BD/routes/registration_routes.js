const express = require('express');
let RegistrationController =  require('../controllers/registration');
let router = express.Router()


router.get('/signup',RegistrationController.new)

module.exports = router;