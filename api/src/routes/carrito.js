const router = require("express").Router();
const { Op } = require("sequelize");
const { Carrito, LineaDeOrden, Usuario, Producto } = require("../db.js");
const { Carrito, LineaDeOrden, Usuario, Producto } = require("../db.js");

/* -------------------Rutas Orden de compra------------------ */

router.get("/:id", (req, res) => {
  let order_id = req.params.id;

  Carrito.findByPk(order_id, {
    include: [{ model: LineaDeOrden }, { model: Producto }],
  }) //Traemos los datos del producto, precio, cantidad, etc
    .then((respuesta) => {
      if (respuesta) return res.status(200).json(respuesta);
      else res.status(404).json({ error: "Orden no encontrada" });
    })
    .catch((error) => res.status(400).json(error));
});

router.put("/:id", async (req, res) => {
  let order_id = req.params.id;

  let {
    nombre,
    apellido,
    pais,
    ciudad,
    direccion,
    codigoPostal,
    telefono,
    tipoEnvio,
    estado,
  } = req.body;

  if (
    !nombre ||
    !apellido ||
    !pais ||
    !ciudad ||
    !direccion ||
    !codigoPostal ||
    !telefono ||
    !tipoEnvio ||
    !estado
  ) {
    return res
      .status(400)
      .send("Debes completar todos los campos para poder realizar la compra!");
  }

  const orden = await Carrito.findByPk(id);

  if (!orden) return res.status(400).send("No se encontró la orden de compra");

  try {
    orden.estado = estado;
    orden.nombre = nombre;
    orden.apellido = apellido;
    orden.pais = pais;
    orden.ciudad = ciudad;
    orden.direccion = direccion;
    orden.codigoPostal = codigoPostal;
    orden.telefono = telefono;
    orden.tipoEnvio = tipoEnvio;
    await order.save();

    const OrdenRegistrada = await orden.reload();
    return res.status(200).send({OrdenRegistrada});

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
