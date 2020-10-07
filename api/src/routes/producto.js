const app = require('express').Router();
const { Product } = require('../db.js');

server.get('/:producto', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

module.exports = server;
