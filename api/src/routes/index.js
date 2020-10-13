const express = require("express");
// import all routers;
const Categorias = require("./categorias.js");
const ProductoRuta = require("./producto.js");
const Usuarios = require("./usuarios");
const { Op } = require("sequelize");
const { Producto } = require("../db.js");
const app = express();
// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
app.use("/producto", ProductoRuta);
app.use("/categorias", Categorias);
app.use("/usuarios", Usuarios)
//prettier-ignore
app.get("/search", (req, res) => {
  const query = req.query;
    Producto.findAll({
      where: {
        [Op.or]: [
          { nombre: { [Op.iLike]: `%${query.busqueda}%` } },
          { descripcion: { [Op.iLike]: `%${query.busqueda}%` } },
        ],
      },
    }).then((response) => {
      if (response.length <= 0){
        return res.status(404).send("No se encontró ningún producto con ese nombre o descripción!");
      }else{
        return res.status(200).send(response)
      }
    }).catch(() => res.status(400).send("Algo salió mal"));
});
module.exports = app;