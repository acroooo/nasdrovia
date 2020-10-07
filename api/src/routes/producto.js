const express = require('express');
const router = express.Router();
const app = express();
const { Producto } = require('../db.js');

router.get('/',(req, res, error) => {
	Producto.findAll()
		.then(productos => {
			res.send('funciona').status(200);
		})
		.catch(error.message);
});

module.exports = router;