const express = require('express');
const cors = require('cors')
const Events = require('events')
const emitter = new Events
const path = require('path')
const productRouter = require('./db/routes/product.router')

const mod = require('./data')
const {json, response} = require("express");

const PORT = 3000
const app = express();

app.use(cors())

// app.use(function (request, response) {
//     console.log(mod)
//     response.sendFile(path.join(__dirname, '/wwwroot', '/index.html'));
//     response.statusCode = 200
//     // response.sendFile(path.join(__dirname, '/wwwroot', '/app.js'));
//
// });

app.use(express.json())
app.use(express.static(__dirname + "/reactapp/build"));
app.use('/main/api', productRouter)
app.use('/api', productRouter)

// app.get('/', (request, response) => {
//     console.log('GETT')
//     response.send(getFromDataBase())
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'/reactapp/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Сервак на ${PORT} Порте`)
})