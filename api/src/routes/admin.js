const router = require("express").Router();
const { Usuario } = require("../db.js");

const { isAuthenticated, isAuthenticatedAndAdmin } = require("./middlewares");

router.post("/", isAuthenticatedAndAdmin, async (req, res) => {
  let { nombre, rol, email, contrasena } = req.body;

  if (nombre && email && rol && contrasena) {
    let emailExistente = await Usuario.findOne({ where: { email: email } });
    if (emailExistente) {
      res.status(400).json({ Error: "Email ya registrado" });
    } else {
      let nuevoAdmin = await Usuario.create({
        name: nombre,
        role: rol,
        password: contrasena,
        email,
      });
      res.status(201).json(nuevoAdmin);

    }
  } else {
    res.status(400).send("Faltan parámetros");
  }
});

module.exports = router;

module.exports = router;
