const router = require("express").Router();
const { Usuario } = require("../db"); //Revisar si va esta parte
const passport = require("passport");
const { isAuthenticatedAndAdmin } = require("./middlewares");

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(201).send(req.user["dataValues"]);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(201).send("Usuario deslogueado");
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
//--------- Autenticación Facebook-----------
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"], display: "popup" })
);

router.get("/facebook/callback", passport.authenticate("facebook"), function (
  req,
  res
) {
  // Successful authentication, redirect home.
  res.redirect("/me");
});

//--------- Autenticación Google -----------

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
// Api call back function
// app.get(
//   "/callback",
//   passport.authenticate("google", { scope: ["email", "profile"] }),
//   (req, res) => {
//     return res.send("Felicidades");
//   }
// );
module.exports = router;
