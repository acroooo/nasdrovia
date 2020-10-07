const server = require('express').Router();
const { Producto } = require('../db.js');

server.get('/', (req, res, next) => {
	
	Producto.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});
server.post('/', async (req, res, next) => {
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
module.exports = server;
