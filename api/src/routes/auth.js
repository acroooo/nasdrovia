const router = require("express").Router();
const { Usuario } = require("../db"); //Revisar si va esta parte
const passport = require("passport");
const { isAuthenticatedAndAdmin } = require("./middlewares");

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(201).json("Usuario se encuentra logueado");
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(201).json("Usuario deslogueado");
});

router.get("/me", (req, res) => {
  if (req.isAuthenticated()) return res.send(req.usuario);
  else return res.status(401).send("Usuario no se encuentra logueado");
});

router.post("/promote/:id", isAuthenticatedAndAdmin, async (req, res) => {
  id = req.params.id;

  const user = await Usuario.findOne({ where: { id } });
  if (!user) return res.status(400).send("no se encontro el usuario");
  await user.update({ rol: "admin" });
  return res.status(201).send(user);
});

module.exports = router;
