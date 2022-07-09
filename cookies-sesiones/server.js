//variable para obtener express
const express = require('express');
// es mi middleware se encarga de encriptalar y desincriptalas
const cookieSession = require('cookie-session')


const app = express();

//para que lo maneje express le indicamos que lo use y se pasa la configuracion de como queremos que lo maneje
app.use(cookieSession({
    name: 'session',
    keys: ['asdkjfaksdljfwiooewioew','kaseiueijwxnixeiniwe']
}));

//las cookies son independientes cada nevagodor tiene la suya
app.get('/', (req,res) =>{
    req.session.visits = req.session.visits || 0;
    req.session.visits = req.session.visits + 1;

    res.send(`${req.session.visits} visitas(s)`);

})


app.listen(3000);

