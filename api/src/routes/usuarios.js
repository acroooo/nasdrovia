const router = require("express").Router();
const { Usuario, Carrito, Producto, LineaDeOrden } = require("../db.js");

router.post("/", async (req, res, next) => {
  let { nombre, rol, email, contrasena } = req.body;
  if (nombre && email && contrasena) {
    let emailExistente = await Usuario.findOne({ where: { email: email } });
    if (emailExistente) {
      res.status(400).json({ Error: "Email ya registrado" });
    } else {
      let nuevo_usuario = await Usuario.create({
        name: nombre,
        rol,
        email,
        password: contrasena,
      });
      res.status(201).json(nuevo_usuario);
    }
  } else {
    res
      .status(400)
      .json({ Error: "Faltan parametros todos son requeridos excepto el rol" });
  }
});

router.put("/:id", async (req, res, next) => {
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

router.get("/", (req, res) => {
  Usuario.findAll()
    .then((usuarios) => res.send(usuarios))
    .catch((err) => {
      return res.status(400).send(err);
    })
})

router.delete("/:id", (req, res) => {
  let { id } = req.params;
  Usuario.destroy({ where: { id } }).then((response) => {
    if (response === 0) res.status(400);
    else res.status(201).send("borrado");
  }).catch((err) => res.status(400).send(err.message))
})

/* -------------------CARRITO------------------ */

//AÚN ESTÁN EN PROCESO
//Agregar al carrito

router.post("/:idUser/cart", async (req, res) => {
   //Lista para el bulkCreate
  let lista = []
  id = req.params.idUser
  let productos = JSON.parse(req.body.productos)
  let {nombre, apellido, pais, ciudad, direccion, codigoPostal, telefono, tipoEnvio, estado} = req.body
  

  const item = await Carrito.findOne({
    where: { usuarioId: id , estado: "En proceso" },
  });

  if (item) return res.status(400).send("El usuario tiene un carrito");
  //Se crea el carro
  let compras = await Carrito.create({
    usuarioId: id,
    nombre: nombre,
    apellido: apellido,
    pais: pais,
    ciudad: ciudad,
    direccion: direccion,
    codigoPostal: codigoPostal,
    telefono: telefono,
    tipoEnvio: tipoEnvio,
    estado: estado
  })
  //Llenamos la lista de productos
  productos.list.forEach(element => {
    let producto = {
      productoId: element.id,
      carritoId: compras.id,
      cantidad: element.cantidad,
      precio: element.precio
    }
    lista.push(producto)
  });
  //Creamos las lineasDeOrden asociadas al carrito
  LineaDeOrden.bulkCreate(lista) 
  .then(
    Carrito.findOne(
      {where: { id: compras.id },
      include: LineaDeOrden,
    }
    ).then(
      (carrito)=> res.json(carrito)
      ))

});

//Obtener items del carrito
router.get("/:idUser/cart", (req, res) => {
  const { idUser } = req.params;

  Carrito.findOne({
    where: { usuarioId: idUser, estado: "En proceso" },
    include: [{ model: LineaDeOrden }],
  }).then((item) => {
    if (!item) return res.status(400).json("El carrito se encuentra vacio");
    else return res.send(item);
  });
});

//Vaciar carrito
router.delete("/:idUser/cart", (req, res) => {
  const id = req.params.idUser;
  Carrito.destroy({ where: { id, estado: "En proceso" } })
    .then((items) => res.status(200).send("Se vacio el carrito"))
    .catch((err) => res.status(200).json({ Error: "Hubo un error", err }));
});


//Editar cantidad de items del carrito
router.put("/:idUser/cart", (req, res) => {
  const id = req.params.idUser;
  let { cantidad } = req.body;

  Carrito.findOne({
    where: { id, estado: "En proceso" },
    include: { model: LineaDeOrden }
  }).then((respuesta) => {
    respuesta.lineaDeOrden.cantidad = cantidad;
    console.log(respuesta);
    res.send(respuesta)
  }).catch((err) => res.status(404).json(err))
});


module.exports = router;