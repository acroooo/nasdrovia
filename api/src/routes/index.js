const express = require("express");
// import all routers;
const categorias = require("./categorias.js");
const producto = require("./producto.js");
const { Op } = require("sequelize");

const app = express();

app.use("/producto", producto);
app.use("/producto/categorias", categorias);

app.get("/search", (req, res) => {
  const { query, q } = req.query;
  const PrimerIndice = (q - 1) * 2;
  const SegundoIndice = PrimerIndice + 2;
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
      let productos = response;
      let pagina = productos.slice(PrimerIndice, SegundoIndice);
      let resultado = {
        PaginaActual: productos.length > 0 ? q : q - 1,
        productos: pagina,
        mas: pagina.length > 0 ? true : false,
      };
      return res.send(resultado);
    })
    .catch(() => res.status(400).send("Algo salió mal"));
});
module.exports = app;
