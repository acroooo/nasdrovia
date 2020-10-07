const express = require('express');
const router = express.Router();
const app = express();
const { Product } = require('../db.js');

router.get('/',(req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});



module.exports = router;