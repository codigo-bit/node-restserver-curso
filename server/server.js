require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function (req, res) {
  res.json('get USUARIO');
});
 
app.post('/usuario', function (req, res) {  // necesita el paquete bodyparser instala
    let body = req.body;
    if(body.nombre === undefined){

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }else{
        res.json({
            body
        });
    }

});

app.put('/usuario/:id', function (req, res) {
    
    let id = req.params.id; //el id en el metodo.req.params hace referencia al id del usuario/:id 
    
    res.json({  //retorname lo que esta el url
        id
    });
});

app.delete('/usuario', function (req, res) {
    res.json('delete USUARIO');
});

app.listen(process.env.PORT, () => {
    console.log("escuchando el puerto", process.env.PORT);
})