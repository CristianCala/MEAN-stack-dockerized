const express = require('express');
const mysql = require('mysql');

function connect() {
    const conex = mysql.createConnection({
        host: "localhost",
        user: "user",
        port: '3306',
        password: "password",
        database: "claix",
        charset  : 'utf8'
    });

    conex.connect();

    return conex;
}

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
    const conex = connect();
    const statement = 'select id, title, description, price form product';
    conex.query(statement, (error, products) => {
        console.log(error);
        console.log(products);
        response.send(products);
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
