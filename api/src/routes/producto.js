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
router.post('/', async (req, res, next) => {
	const {nombre, precio, stock, imagen, descripcion} = req.body;
	console.log(req.body)
	if(nombre && precio && stock && imagen && descripcion){
		const nproduct = await Producto.create({
			nombre: nombre,
			precio: precio,
			stock: stock,
			imagen: imagen,
			descripcion: descripcion
		})
		res.status(201).json(nproduct)
	}else {
		res.status(400).json({"Error":"Faltan parametros"})
	}
});
module.exports = router;
