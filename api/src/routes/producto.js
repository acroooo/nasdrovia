const app = require('express').Router();
const { Producto } = require('../db.js');

app.get('/:producto', (req, res, next) => {
	Producto.findAll()
		.then(productos => {
			res.send(productos);
		})
		.catch(next);
});

module.exports = app;
