const router = require("express").Router();
const { Op } = require("sequelize");
const { Carrito, LineaDeOrden, Usuario, Producto } = require("../db.js");

/* -------------------Rutas Orden de compra------------------ */

router.get("/:id", (req, res) => {
  let id = req.params.id;

  Carrito.findByPk(id, {
    include: [{ model: LineaDeOrden }],
  }) //Traemos los datos del producto, precio, cantidad, etc
    .then((respuesta) => {
      if (respuesta) return res.status(200).json(respuesta);
      else res.status(404).json({ error: "Orden no encontrada" });
    })
    .catch((error) => res.status(400).json(error));
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

router.put("/:idCarro/cart", async (req, res) => {
  var { idCarro } = req.params;
  var { productoId, cantidad, precio } = req.body;
  if (!productoId) res.status(400).send("falta el producto a editar");
  const orden = await Carrito.findOne({
    where: { id:idCarro, estado: "En proceso" }, include: LineaDeOrden
  })
  if (!orden) res.status(400).send("no se encuentra el carrito");
  try {
    const [ordenAct, creado] = await LineaDeOrden.findOrCreate({ where: { productoId, carritoId: orden.id }, default: { cantidad, precio } })
    if (!creado) {
      if (cantidad === 0) {
        ordenAct.destroy();
      }
      else {
        ordenAct.cantidad = cantidad || ordenAct.cantidad;
        ordenAct.precio = precio || ordenAct.precio;
        await ordenAct.save();
        await ordenAct.reload();
      }
    }
    await orden.save();
    await orden.reload();
    return res.status(200).send(orden)
  }
  catch (err) {
    res.status(400).send("ups, algo salio mal")
  }

})

module.exports = router;
