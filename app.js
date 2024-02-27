// Inicializando Express
const express = require('express');
const app = express();
// Set da porta
const port = 8080;

// Inicializar EJS

app.get("/", (req, res) => {
    res.send('<h1>API</h1>');
    res.status(200).send("OKIDOKI");
});

app.get("/sobre", (req, res) => {
    res.send("<h1>SOBRE</h1>");
});

app.listen(port, function(){
    console.log("API rodando!")
});