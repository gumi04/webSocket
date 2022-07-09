const { response } = require('express');



module.exports = {
    new: (req,res) =>{
        res.render('registration/new');
    }
}