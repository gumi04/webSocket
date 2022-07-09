const User = require('../models').User
module.exports = {
    new: (req, res) => {
        res.render('sessions/new')
    },
    create: (req, res) => {
        User.login(req.body.email, req.body.password).then(data =>{
            res.json(data);
        }).catch(error =>{
            res.json(error)
        })

    }
};