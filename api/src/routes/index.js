const express = require("express");
// import all routers;
const categorias = require("./categorias.js");
const producto = require("./producto.js");
const { Op } = require("sequelize");

const app = express();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

app.use("/producto", producto);
app.use("/producto/categorias", categorias);

app.get("/search", (req, res) => {
  const { query } = req.query;
  producto
    .FindAll({
      where: {
        [Op.or]: [
          { nombre: { [Op.iLike]: `%${query}%` } },
          { descripcion: { [Op.iLike]: `%${query}%` } },
        ],
      },
    })
    .then((response) => {
      if (response.length <= 0)
        return res
          .status(404)
          .send("No se encontró ningún producto con ese nombre o descripción!");
    })
    .catch(() => res.status(400).send("Algo salió mal"));
});

module.exports = app;
