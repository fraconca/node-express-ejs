// Inicializando Express
const express = require('express');
const app = express();
const port = 8080;



// Inicializar EJS
app.set('view engine','ejs');
app.set('views', './views');



// Scripts para views e templates
var pessoas = [
    {
        'nome': 'Paulo',
        'idade': 12
    },
    {
        'nome': 'Jõao',
        'idade': 15,
    },
    {
        'nome': 'Marina',
        'idade': 25,
    },
]



// "Rota = /"
app.get("/", (req, res) => {

    // // Padrão
    // res.render('app-index', {status: 'OKIDOKI'});

    // Array pessoas 
    res.render('app-index', { pessoas: pessoas });

});



// "Rota = /sobre"
app.get("/sobre", (req, res) => {

    res.send("<h1>SOBRE</h1>");

});



// LISTEN PORT
app.listen(port, function(){

    console.log("API rodando!");

});