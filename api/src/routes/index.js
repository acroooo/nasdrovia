const express = require("express");
// import all routers;
const categorias = require("./categorias.js")
const producto = require("./producto.js");

const app = express();

const productRouter = require("./producto.js");
const categoryRouter = require("./categoria.js");



// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);


router.use("/producto", productRouter);
router.use("/category",categoryRouter);


app.use("/producto", producto);
app.use("/producto/categorias", categorias);

module.exports = app;
