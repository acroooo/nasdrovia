const router = require("express").Router();
const { Usuario, LineaDeOrden, Carrito} = require("../db.js");



router.post("/", async (req, res, next) => {
  let { nombre, rol, email, contrasena} = req.body;
      if (nombre  && email  && contrasena) {
          let emailExistente = await Usuario.findOne({ where: { email: email} });
            if(emailExistente){
              res.status(400).json({ Error: "Email ya registrado" });
             }else{
               let nuevo_usuario = await Usuario.create({
                  name: nombre,
                  rol,
                  email,
                  password: contrasena,
                });
                res.status(201).json(nuevo_usuario);
            }
      }else{
        res.status(400).json({ Error: "Faltan parametros todos son requeridos excepto el rol" });
      }
});


router.put("/:id", async (req, res, next) => {
  // To-Do:  Mejorar ni riot se animo a tanto, pero funciona
  let id  = req.params.id
  let { nombre, rol, email, contrasena} = req.body;
  if (nombre  || email  || contrasena || rol){
    //Almenos un dato me mandan
    if(email){
      //Quieren actualizar el campo email
      //Busco el email
      let emailExistente = await Usuario.findOne({ where: { email: email } });
      if (emailExistente){
        //El email existe en la db
        if(emailExistente.id == id){
          //El email era el mismo del usuario a actualizar 
          await Usuario.update({
            name: nombre,
            rol,
            email,
            password: contrasena,
          }, {
            where: {
              id: id
            }
          })
          res.status(201).send("Actualizado con exito");
        }else{
          //El email existe y no es el mio
          res.status(400).json({ Error: "Email ya en uso" })
        }
      }else{
        //El email no existia en la db
        await Usuario.update({
          name: nombre,
          rol,
          email,
          password: contrasena,
        }, {
          where: {
            id: id
          }
        });
        res.status(201).send("Actualizado con exito");
      }
    }else{
      //No enviaron el campo email no hago ningun checkeo y actualizo
      await Usuario.update({
        name: nombre,
        rol,
        email,
        password: contrasena,
      }, {
        where: {
          id: id
        }
      });
      res.status(201).send("Actualizado con exito");
    }
  }else{
    //Por si no se envia ningun parametro a actualizar
      res.status(400).json({ Error: "Faltan parametros envia almenos uno" });
    }
});

router.get("/:id/ordenes", async(req, res) =>{
  let user_id  = req.params.id
  //todas las ordenes del usuario
  const todas_las_ordenes = await Carrito.findAll({
    where: { id: user_id },
    include: LineaDeOrden,
  });
  if(todas_las_ordenes){
    res.status(200).json(todas_las_ordenes)
  }else{
    res.status(200).json({error: "El usuario no posee ordenes"})
  }
})

module.exports = router;

