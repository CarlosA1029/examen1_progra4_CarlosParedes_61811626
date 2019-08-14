const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('/', (req, res) => {
    res.json({Nombre:'Carlos'})
    res.json({Precio: '15'})
    res.json({Creado_en:'14/8/2019'})
});

// Deberá hacer aquí el método post para producto (Valor 5 puntos)
app.post('/', (req, res) => {
    res.json({Nombre},
        {Precio}, 
        {Creado_en})
    
});
