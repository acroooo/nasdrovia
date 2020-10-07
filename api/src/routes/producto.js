const express = require('express');
const router = express.Router();
const app = express();
const { Producto, Categories } = require('../db.js');

app.use

router.get('/',(req, res, error) => {
	Producto.findAll()
		.then(productos => {
			res.send(productos).status(200);
		})
		.catch(error.message);
});

module.exports = router;