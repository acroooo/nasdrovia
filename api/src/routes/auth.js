const router = require("express").Router();
const { Usuario } = require("../db"); //Revisar si va esta parte
const passport = require("passport");

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(201).json("Usuario se encuentra logueado");
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(201).json("Usuario deslogueado");
});

router.get("/me", (req, res) => {
  console.log(req.user)
  if (req.isAuthenticated()) return res.send(req.usuario);
  else return res.status(401).send("Usuario no se encuentra logueado");
});

router.post("/promote/:id", async (req, res) => {
  id = req.params.id;
  if (!req.isAuthenticated())
    return res.status(400).send("no se encuentra logueado");
  if (req.usuario.rol !== admin)
    return res
      .status(400)
      .send("no tienes permisos para realizar la operacion");
  const user = await Usuario.findOne({ where: { id } });
  if (!user) return res.status(400).send("no se encontro el usuario");
  await user.update({ rol: "admin" });
  return res.status(201).send(user);
});

module.exports = router;
