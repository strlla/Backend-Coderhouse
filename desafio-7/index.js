const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

//Obtengo los productos
const products = JSON.parse(fs.readFileSync('./products.txt', 'utf-8'));
//Inicializo las visitas
const visits = { items: 0, item: 0 };

//Levanto el servidor
const server = app.listen(PORT, ()=>{
    console.log('El servidor está arriba')
})

server.on('Error', error => console.log(`Error en el sevidor ${error}`));

app.get('/items', (req, res) => {
    console.log('request recibido');
    try {
        visits.items++;
        console.log(visits)
        res.status(200).send({items: products, quantity: products.length});

    } catch (err) {
        res.status(404).send({msg: 'No se pudo devolver los items'})
    }
});

app.get('/item-random', (req, res) => {
    console.log('request recibido');
    try{
        const randomIndex = Math.floor(Math.random() * products.length);
        const randomProduct = products[randomIndex];
        visits.item++;
        res.status(200).send({item: randomProduct})    
    } catch (err) {
        res.status(404).send({msg: 'No se pudo devolver los items'})
    }
});

app.get('/visitas', (req, res) => {
    console.log('request recibido');
    try{
        res.status(200).send({visits: {items: visits.items, item: visits.item}});    
    } catch (err) {
        res.status(404).send({msg: 'No se pudo devolver las visitas'})
    }
});

