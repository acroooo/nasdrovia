const router = require("express").Router();

const {
  Producto,
  Categories,
  producto_categoria,
  Images,
  Reviews,
} = require("../db.js");
const { isAuthenticated, isAuthenticatedAndAdmin } = require("./middlewares");
router.get("/", (req, res, next) => {
  Producto.findAll({
    include: [
      {
        model: Images,
      },
      {
        model: Categories,

      },
    ],

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
    include: [
      {
        model: Images,

        required: true,
      },
      {
        model: Categories,
        required: true,
      },
    ],
  })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch(next);
});

router.post("/", isAuthenticatedAndAdmin, async (req, res, next) => {

  const { nombre, precio, stock, imagen1, imagen2, imagen3, descripcion, } = req.body;

  if (nombre && precio && stock && descripcion && imagen1) {
    const nproduct = await Producto.create(
      {
        nombre: nombre,
        precio: precio,
        stock: stock,
        descripcion: descripcion,
        images: {
          0: imagen1,
          1: imagen2,
          2: imagen3,
        },
      },
      {
        include: Images,
      }
    );
    res.status(201).json(nproduct);
  } else {
    res.status(400).json({ Error: "Faltan parametros" });
  }
});

router.put("/:id", isAuthenticatedAndAdmin, (req, res) => {
  let id = req.params.id;
  let {
    nombre,
    precio,
    stock,
    imagen1,
    imagen2,
    imagen3,
    descripcion,
  } = req.body;
  if (imagen1 || imagen2 || imagen3) {
    Images.update({ 0: imagen1, 1: imagen2, 2: imagen3 }, { where: { id } });
  }
  if (nombre || precio || stock || descripcion) {
    Producto.update({ nombre, precio, stock, descripcion }, { where: { id } })
      .then((producto) => res.status(200).send(producto))
      .catch((err) => res.status(400).json(err));
  }
});

router.delete("/:id", isAuthenticatedAndAdmin, (req, res) => {
  let id = req.params.id;
  Producto.destroy({ where: { id } }).then((response) => {
    if (response === 0) return res.sendStatus(400);
    else return res.sendStatus(201);
  });
});

router.post(
  "/:idProd/categoria/:idCat",
  isAuthenticatedAndAdmin,
  async (req, res) => {
    const { idProd, idCat } = req.params;
    const producto = await Producto.findOne({ where: { id: idProd } });
    const categoria = await Categories.findOne({ where: { id: idCat } });
    //asociando
    await producto.addCategories(categoria);
    const result = await Producto.findOne({
      where: { id: idProd },
      include: Categories,
    });
    res.json(result);
  }
);
router.delete(
  "/:idProd/categoria/:idCat",
  isAuthenticatedAndAdmin,
  (req, res) => {
    const { idProd, idCat } = req.params;

    producto_categoria
      .destroy({ where: { productoId: idProd, categoryId: idCat } })
      .then(() => res.sendStatus(200));
  }
);

// arrancan las rutas de review

router.post("/:id/review", isAuthenticated, (req, res) => {
  let { commentary, qualification, usuarioId } = req.body;
  var productoId = req.params.id;
  console.log(productoId);
  if (!commentary || !qualification || !usuarioId) {
    res.status(400).send("Faltan parametros");
  }
  Reviews.create({ commentary, qualification, usuarioId, productoId })
    .then((respuesta) => {
      res.status(201).send(respuesta);
    })
    .catch((err) => {
      return res.status(404).send(err.message);
    });
});

router.delete(
  "/:id/review/:idReview",
  isAuthenticatedAndAdmin,
  async (req, res) => {
    let id = req.params.idReview;
    let idprod = req.params.id;
    const review = await Reviews.findOne({ where: { productoId: idprod, id } });
    if (!review) return res.status(400).send("no se encontro");
    await review.destroy();
    return res.status(200).send("eliminado");
  }
);

/* ----------------------------Actualizar rewiew de un producto---------------------------------------------*/
//Fix temporal
router.put("/:id/review/:idRewiew", isAuthenticated, (req, res) => {
  let { commentary, qualification } = req.body;
  let productoId = req.params.id;
  let rewiewId = req.params.idRewiew;
  if (!commentary && !qualification) {
    res.status(400).json({ Error: "Envia almenos un parametro" });
  }
  if (qualification) {
    let qualification = parseInt(req.body.qualification, 10);
    if (Number.isNaN(qualification)) {
      return res
        .status(400)
        .json({ Error: "La calificacion debe ser un numero" });
    }
    if (qualification < 1 || qualification > 5) {
      return res
        .status(400)
        .json({ Error: "La calificion debe estar conprendida entre 1 y 5" });
    }
  }
  if (commentary) {
    let largo = commentary.length;
    console.log(largo);
    if (largo < 15 || largo > 200) {
      return res
        .status(400)
        .json({ Error: "El comentario debe tener entre 15 y 200 caracteres" });
    }
  }

  Reviews.findOne({ where: { productoId: productoId, id: rewiewId } })
    .then((existe) => {
      !!existe
        ? Reviews.update(
            { commentary, qualification },
            { where: { productoId: productoId, id: rewiewId } }
          ).then(res.status(200).json({ OK: "Actualizado correctamente" }))
        : res.status(404).json({ Error: "Rewiew no existente" });
    })
    .catch((err) => res.status(400).json({ Error: err }));
});

/* ----------------------------Obtener todas las rewiew de un producto---------------------------------------------*/
router.get("/:id/review/", isAuthenticated, (req, res) => {
  let productoId = req.params.id;
  Producto.findOne({ where: { id: productoId } }).then((producto) => {
    if (!producto) {
      return res.status(404).json({ Error: "Producto inexistente" });
    }
  });
  Reviews.findAll({ where: { productoId: productoId } })
    .then((rewiews) => {
      rewiews.length > 1
        ? res.status(200).json(rewiews)
        : res.status(404).json({ Error: "Este producto no tiene rewiews" });
    })
    .catch((err) => res.status(400).json({ Error: err }));
});



module.exports = router;
