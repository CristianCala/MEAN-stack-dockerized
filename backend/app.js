const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Api de rutas
const api = require('.api');
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Aquí van las rutas
app.use('/', api);

// Configuración de puertos HTTP
const port = process.env.PORT || '3000';
app.set('port', port);

// Creación de puertos HTTP
const server = http.createServer(app);

// Escuchaar todos los pedidos del puerto seteados
server.listen(port, () => console.log(`backend running on port:${port}`));
