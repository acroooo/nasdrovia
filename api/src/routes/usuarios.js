const router = require("express").Router();
const { Usuario, Carrito, Producto, LineaDeOrden } = require("../db.js");
const { isAuthenticated, isAuthenticatedAndAdmin } = require("./middlewares");
router.post("/", async (req, res, next) => {
  let { nombre, email, password } = req.body;
  if (nombre && email && password) {
    let emailExistente = await Usuario.findOne({ where: { email: email } });
    if (emailExistente) {
      res.status(400).json({ Error: "Email ya registrado" });
    } else {
      let nuevo_usuario = await Usuario.create({
        nombre,
        email,
        password: password,
      });
      res.status(201).json(nuevo_usuario);
    }
  } else {
    res
      .status(400)
      .json({ Error: "Faltan parametros todos son requeridos excepto el rol" });
  }
});

router.put("/:id", isAuthenticated, async (req, res, next) => {
  // To-Do:  Mejorar ni riot se animo a tanto, pero funciona
  let id = req.params.id;
  let { nombre, rol, email, contrasena } = req.body;
  if (nombre || email || contrasena || rol) {
    //Almenos un dato me mandan
    if (email) {
      //Quieren actualizar el campo email
      //Busco el email
      let emailExistente = await Usuario.findOne({ where: { email: email } });
      if (emailExistente) {
        //El email existe en la db
        if (emailExistente.id == id) {
          //El email era el mismo del usuario a actualizar
          await Usuario.update(
            {
              name: nombre,
              rol,
              email,
              password: contrasena,
            },
            {
              where: {
                id: id,
              },
            }
          );
          res.status(201).send("Actualizado con exito");
        } else {
          //El email existe y no es el mio
          res.status(400).json({ Error: "Email ya en uso" });
        }
      } else {
        //El email no existia en la db
        await Usuario.update(
          {
            name: nombre,
            rol,
            email,
            password: contrasena,
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(201).send("Actualizado con exito");
      }
    } else {
      //No enviaron el campo email no hago ningun checkeo y actualizo
      await Usuario.update(
        {
          name: nombre,
          rol,
          email,
          password: contrasena,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(201).send("Actualizado con exito");
    }
  } else {
    //Por si no se envia ningun parametro a actualizar
    res.status(400).json({ Error: "Faltan parametros envia almenos uno" });
  }
});

router.get("/", isAuthenticatedAndAdmin, (req, res) => {
  Usuario.findAll()
    .then((usuarios) => res.send(usuarios))
    .catch((err) => {
      return res.status(400).send(err);
    });
});
router.get("/:id", isAuthenticatedAndAdmin, (req, res) => {
  let id = req.params.id;
  Usuario.findOne({ where: { id: id } })
    .then((usuario) => {
      !!usuario ? res.send(usuario) : res.json({ Error: "Usuario no existe" });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});
router.delete("/:id", isAuthenticatedAndAdmin, (req, res) => {
  let { id } = req.params;
  Usuario.destroy({ where: { id } })
    .then((response) => {
      if (response === 0) res.status(400);
      else res.status(201).send("borrado");
    })
    .catch((err) => res.status(400).send(err.message));
});

router.post("/cambioPassword", async (req, res) => {
  const { email } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario)
      return res.status(404).send("No hay usuarios registrados con ese email");

    const salt = await User.generateSalt();

    usuario.olvidoPassword = salt;
    await usuario.save();

    setTimeout(() => {
      usuario.olvidoPassword = null;
      usuario.save();
    }, 1080);
    const data = {
      from: "Nasdrovia <sanchezlismairy@gmail.com>",
      to: email,
      subject: "Reseteo de Password",
      text: `http://localhost:3000/passwordReset/${salt}`,
      template: "password",
    };

    mailgun.messages().send(data, function (error, body) {
      if (error) {
        console.log({ error });
        return res.status(200).send({ salt, statusEmail: "error" });
      }

      return res.status(200).send({ salt, statusEmail: "enviado" });
    });
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.post("/:id/passwordReset", async (req, res) => {
  const { email, password, token } = req.body;
  if (!email || !password || !token)
    return res.status(400).send("Faltan parámetros");
  try {
    const usuario = await Usuario.findOne({
      where: { email, olvidoPassword: token },
    });
    if (!usuario) return res.status(400);

    usuario.password = password;
    usuario.olvidoPassword = null;
    await usuario.save();

    return res
      .status(200)
      .send("Felicidades, su contraseña se ha actualizado exitosamente");
  } catch (error) {
    res.status(500).send(error);
  }
});
/* -------------------CARRITO------------------ */

//AÚN ESTÁN EN PROCESO
//Crear el carro
router.post("/:idUser/cart", async (req, res) => {
  let id = req.params.idUser;
  const item = await Carrito.findOne({
    where: { usuarioId: id, estado: "carrito" },
  });

  if (item) return res.status(400).send("El usuario tiene un carrito");

  let compras = await Carrito.create({
    usuarioId: id,
  });
  res.status(200).json(compras);
});

//Obtener items del carrito
router.get("/:idUser/cart", (req, res) => {
  const { idUser } = req.params;

  Carrito.findOne({
    where: { usuarioId: idUser, estado: "carrito" },
    include: [{ model: LineaDeOrden }],
  }).then((item) => {
    if (!item) return res.status(200).json("El carrito se encuentra vacio");
    else return res.send(item);
  });
});

//Vaciar carrito
router.delete("/:idUser/cart", async (req, res) => {
  const id = req.params.idUser;
  let compras = await Carrito.findOne({
    where: { usuarioId: id, estado: "carrito" },
  });
  let deleting = await LineaDeOrden.destroy({
    where: { carritoId: compras.id },
  });
  res.status(200).json({ deleted: "ok" });
});

module.exports = router;
