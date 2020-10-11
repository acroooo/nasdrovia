const router = require("express").Router();
const { Producto, Categories, producto_categoria , Images} = require("../db.js");

router.get("/", (req, res, next) => {
  Producto.findAll({
    includes: [Categories],
    include: Images
  })
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Producto.findOne({
    where: { id },
    includes: [Categories],
    include: Images
  })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  const { nombre, precio, stock, img, img1, img2, descripcion, } = req.body;
  if (nombre && precio && stock && descripcion && img) {
   
    const nproduct = await Producto.create({
      nombre: nombre,
      precio: precio,
      stock: stock,
      descripcion: descripcion,
      images: {
        0: img, 
        1: img1, 
        2: img2
      }},
      {
        include: Images
      });
    res.status(201).json(nproduct)
  } else {
    res.status(400).json({ Error: "Faltan parametros" });
  }
});
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let { nombre, precio, stock, imagen, descripcion } = req.body;
  if (!nombre || !precio || !stock || !imagen || !descripcion) {
    Producto.update(
      { nombre, precio, stock, imagen, descripcion },
      { where: { id } }
    )
      .then((producto) => res.status(200).send(producto))
      .catch((err) => res.status(400).json(err));
  }
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Producto.destroy({ where: { id } }).then((response) => {
    if (response === 0) return res.sendStatus(400);
    else return res.sendStatus(201);
  });
});

module.exports = router;
