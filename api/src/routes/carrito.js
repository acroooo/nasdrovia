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
  const query = req.query;
  Carrito.findAll({
    include: [{ model: LineaDeOrden }, { model: Producto }],
    where: estado ? { estado: { [Op.iLike]: query.estado } } : {},
  }).then((r) => {
    if (r.length <= 0) {
      res.status(400).send("no existe su petición");
    }
    res.status(200).send(r);
  });
});


//Agregar productos al carro
router.post("/:idCarro/cart", (req, res)=>{
  let lista = []
  id = req.params.idCarro
  let productos = JSON.parse(req.body.productos)
  //Llenamos la lista de productos
  productos.list.forEach(element => {
    let producto = {
      productoId: element.id,
      carritoId: id,
      cantidad: element.cantidad,
      precio: element.precio
    }
    lista.push(producto)
  });
  //Creamos las lineasDeOrden asociadas al carrito
  LineaDeOrden.bulkCreate(lista) 
  .then(
    Carrito.findOne(
      {where: { id: id },
      include: LineaDeOrden,
    }
    ).then(
      (carrito)=> res.json(carrito)
      ))
})
//Editar las cantidad con el id del carro y el id producto la cantidad 
router.put("/:id/cart", async (req, res) => {
 let id = req.params;
  var { productoId, cantidad, precio } = req.body;
  console.log(req.body)
  if (!productoId) res.status(400).send("falta el producto a editar");
  const orden = await Carrito.findOne({
    where: { id: id, estado: "carrito" }, include: LineaDeOrden
  })
  console.log(orden)
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

router.delete("/borrar/:idCarro", async (req, res) => {
  const id = req.params.idCarro;
  console.log(id)
  let producto = req.body.producto
 let compras = await Carrito.findOne({ where: { id: id} })
 let deleting = await  LineaDeOrden.destroy({ where: { productoId: producto} })
 res.status(200).json(compras)
});
module.exports = router;
