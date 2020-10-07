const app = require('express').Router();
const { Producto } = require('../db.js');

app.get('/productos', (req, res, next) => {
	Producto.findAll()
		.then(productos => {
			res.send(productos).status(200);
		})
		.catch(next);
});

module.exports = app;
