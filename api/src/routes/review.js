const router = require("express").Router();
const { Reviews, Producto } = require("../db.js");

router.post("/:id/review", (req, res) => {
    let { commentary, qualification, usuarioId } = req.body;
    var productoId = req.params.id;
    console.log(productoId)
    if (!commentary || !qualification || !usuarioId) {
        res.status(400).send("Faltan parametros");
    }
    Reviews.create({ commentary, qualification, usuarioId, productoId }).then((respuesta) => {
        res.status(201).send(respuesta);
    }).catch((err) => {
        return res.status(404).send(err.message)
    });
})

module.exports = router;