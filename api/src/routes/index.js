const express = require("express");
// import all routers;
const categorias = require("./categorias.js")
const producto = require("./producto.js");

const app = express();
// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

app.use("/producto", producto);
app.use("/producto/categorias", categorias);

module.exports = app;
