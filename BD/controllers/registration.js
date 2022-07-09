const User = require('../models').User;

module.exports = {
    new: (req,res) =>{
        res.render('registration/new');
    },
    create: (req,res) =>{
        let data = {
            email: req.body.email,
            password_virtual: req.body.password
        }
        User.create(data).then(result =>{
            res.json(result)
        }).catch(error=>{
            res.json(error)
        });
    }
}