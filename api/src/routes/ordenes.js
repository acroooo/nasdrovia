const router = require("express").Router();
const { Carrito, LineaDeOrden } = require("../db.js");

router.get("/:id", async (req, res) => {
  let order_id = req.params.id;
  const orden_unica = await Carrito.findOne({
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
module.exports = router;
