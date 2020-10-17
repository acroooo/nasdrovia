const router = require("express").Router();
const { Op } = require("sequelize");
const { Carrito, LineaDeOrden, Producto } = require("../db.js");

/* -------------------Rutas Orden de compra------------------ */

router.get("/:id", (req, res) => {
  let order_id = req.params.id;
  const orden_unica = Carrito.findOne({
    where: { id: order_id },
    //Traemos los datos del producto, precio, cantidad, etc
    include: LineaDeOrden,
  });
  //existe esa orden?
  if (orden_unica) {
    res.status(200).json(orden_unica);
  } else {
    res.status(200).json({ error: "Orden no encontrada" });
  }
});
router.get("/", (req, res) => {
  const { estado } = req.query;
  Carrito.findAll({
    include: [{ model: LineaDeOrden }, { model: Producto }],
    where: estado ? { estado: { [Op.iLike]: estado } } : {},
  }).then((r) => {
    if (r.length <= 0) {
      res.status(400).send("no existe su petición");
    }
    res.status(200).send(r);
  });
});
module.exports = router;
