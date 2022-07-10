const User = require('../models').User
module.exports = {
    new: (req, res) => {
        res.render('sessions/new')
    },
    create: (req, res) => {
        User.login(req.body.email, req.body.password).then(user =>{
            if(user){
                req.session.userId = user.id;
            }
            //res.json(user);
            res.render('home', {user: user})
        }).catch(error =>{
            res.json(error)
        })

    },
    destroy: (req, res) => {
        //eliminamos toda la sesion y recibe una funcion para indicar que termino
        req.session.destroy(()=>{
            res.redirect('/sessions');
        });
    }
};