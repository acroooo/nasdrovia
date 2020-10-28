const router = require("express").Router();
const { Op } = require("sequelize");
const { Carrito, LineaDeOrden, Usuario, Producto } = require("../db.js");
const { isAuthenticated, isAuthenticatedAndAdmin } = require("./middlewares");
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
  let estado = req.query.estado;

  Carrito.findAll({
    include: [{ model: LineaDeOrden }],
    where: estado ? { estado: { [Op.iLike]: `%${estado}%` } } : {},
  }).then((r) => {
    if (r.length <= 0) {
      res.status(400).send("no existe su petición");
    }
    res.status(200).send(r);
  });
});

//Agregar productos al carro
router.post("/:idCarro/cart", (req, res) => {
  let lista = [];
  id = req.params.idCarro;
  let productos = JSON.parse(req.body.productos);

  //Llenamos la lista de productos
  productos.list.forEach((element) => {
    let producto = {
      productoId: element.id,
      carritoId: id,
      cantidad: element.cantidad,
      precio: element.precio,
    };
    lista.push(producto);
  });
  //Creamos las lineasDeOrden asociadas al carrito
  LineaDeOrden.bulkCreate(lista).then(
    Carrito.findOne({
      where: { id: id },
      include: LineaDeOrden,
    }).then((carrito) => res.json(carrito))
  );
});

//Editar las cantidad con el id del carro y el id producto la cantidad
router.put("/:id/cart", async (req, res) => {
  let idCarrito = req.params.id;
  let { producto, cantidad, precio } = req.body;
  if (producto || cantidad || precio) {
    LineaDeOrden.findOne({ where: { carritoId: idCarrito } })
      .then((existe) => {
        !!existe
          ? LineaDeOrden.update(
              { producto: producto, cantidad: cantidad, precio: precio },
              { where: { carritoId: idCarrito } }
            ).then(res.status(200).json({ OK: "Actualizado correctamente" }))
          : res.status(400).json({ Error: "Linea de orden no existente" });
      })
      .catch((err) => res.status(400).json({ Error: err }));
  } else {
    res.status(400).json({ Error: "Envia almenos un parametro" });
  }
});

//Borrar un producto del carrito
router.delete("/borrar/:idCarro", async (req, res) => {
  const id = req.params.idCarro;
  let producto = req.body.producto;
  let deleting = await LineaDeOrden.destroy({
    where: { productoId: producto },
  });
  let compras = await Carrito.findOne({
    where: { id: id },
    include: LineaDeOrden,
  });
  res.status(200).json(compras);
});
router.put("/:id/cart/status", (req, res) => {
  let idCarrito = req.params.id;
  let { estado } = req.body;
  if (estado) {
    Carrito.findOne({ where: { id: idCarrito } })
      .then((existe) => {
        !!existe
          ? Carrito.update(
              { estado: estado },
              { where: { id: idCarrito } }
            ).then(res.status(200).json({ OK: "Actualizado correctamente" }))
          : res.status(400).json({ Error: "Linea de orden no existente" });
      })
      .catch((err) => res.status(400).json({ Error: err }));
  } else {
    res.status(400).json({ Error: "Envia almenos un parametro" });
  }
});
module.exports = router;
