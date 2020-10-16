const router = require("express").Router();
const { Carrito, LineaDeOrden } = require("../db.js");

router.get("/:id", (req, res) => {
  let order_id = req.params.id;
  const orden_unica = await Carrito.findOne({
    where: { id: order_id },
    //Traemos los datos del producto, precio, cantidad, etc
    include: LineaDeOrden,
  });
  //existe esa orden?
  if (orden_unica) {
    res.status(200).json(orden_unica)
  } else {
    res.status(200).json({ error: "Orden no encontrada" })
  }
})

router.put("/:id", (req, res) => {
  let order_id = req.params.id;
  let { cantidad, precio } = req.body;
  LineaDeOrden.update(
    { cantidad, precio },
    { where: { order_id } }
  )
    .then((orden) => res.status(200).send(orden))
    .catch((err) => res.status(400).json(err));
});