const User = require('../models').User

module.exports = function(req, res, next){
    if(!req.session.userId) return next();
    User.findOne({
        //buscamos al usuario
        where: {
            id: req.session.userId
        }
    }).then(user =>{
        if(user){
            req.user = user;
            next();
        }
    })
}