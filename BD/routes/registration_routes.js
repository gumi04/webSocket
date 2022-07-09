const express = require('express');

let RegistrationController =  require('../controllers/registration');
let router = express.Router()


router.get('/signup',RegistrationController.new);

router.route('/users').post(RegistrationController.create);

module.exports = router;