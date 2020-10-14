const router = require("express").Router();
const { Usuario,Carrito,LineaDeOrden} = require("../db.js");



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


/* -------------------CARRITO------------------ */


//AÚN ESTÁN EN PROCESO
//Agregar al carrito
router.post('/:idUser/cart',(req,res)=>{
  const id  = req.params.idUser;
  const {nombre,apellido,pais,ciudad,direccion,codigoPostal,telefono,tipoEnvio,estado} = req.body;
  Carrito.create({where:{id,nombre,apellido,pais,ciudad,direccion,codigoPostal,telefono,tipoEnvio,estado:'carrito'},include:LineaDeOrden})
  .then(item=>res.status(201).json(item))
  .catch(err=>res.status(400).json({Error:'Hubo un error',err}))
})

//Obtener items del carrito
router.get('/:idUser/cart',(req,res)=>{
  const id  = req.params.idUser;
  Carrito.findAll({where:{id,estado:'carrito'}})
  .then(items=>res.status(201).json(items))
  .catch(err=>res.status(400).json({Error:'Hubo un error',err}))
})

//Vaciar carrito
router.delete('/:idUser/cart',(req,res)=>{
  const id  = req.params.idUser;
  Carrito.destroy({where:{id,estado:'carrito'}})
  .then(items=>res.status(200).send('Se vacio el carrito'))
  .catch(err=>res.status(200).json({Error:'Hubo un error',err}))
})


module.exports = router;

