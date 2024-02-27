// Inicializando Express
const express = require('express');
const app = express();
const port = 8080;


// Inicializar EJS
app.set('view engine','ejs');
app.set('views', './views');


// "Rota = /"
app.get("/", (req, res) => {
    res.render('app-index', {status: 'OKIDOKI'});
});


// "Rota = /sobre"
app.get("/sobre", (req, res) => {
    res.send("<h1>SOBRE</h1>");
});


// LISTEN PORT
app.listen(port, function(){
    console.log("API rodando!")
});