const express = require('express');
const router = express.Router();
const app = express();
const { Producto, Categories, Checkout, Order, Reviews, User } = require('../db.js');

app.use('/categorias', Categories)

router.get('/', async (req, res, error) => {
	Producto.findAll()
		.then(productos => {
			res.send(productos).status(200);
		})
		.catch(error.message);
});

module.exports = router;