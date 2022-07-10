const User = require('../models').User

module.exports = function (req, res, next) {
    if (!req.session.userId) return next();
    User.findByPk(req.session.userId, {
        //buscamos al usuario
        include: [{
            association: 'tasks'
        }]
    }).then(user => {
        if (user) {
            req.user = user;
            next();
        }
    })
}