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
  let id  = req.params.id
  let { nombre, rol, email, contrasena} = req.body;
  if (nombre  || email  || contrasena || rol){
      if(email){
          let emailExistente = await Usuario.findOne({ where: { email: email } });
          if (emailExistente.id == id || null) {
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
                  res.status(400).json({ Error: "Email ya en uso por otro usuario" })
              }
      }else{
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

