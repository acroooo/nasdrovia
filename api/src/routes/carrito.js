const router = require("express").Router();
const {Carrito,LineaDeOrden} = require("../db.js");


/* -------------------CARRITO------------------ */

//AÚN ESTÁN EN PROCESO
//Agregar al carrito

//users/:idUser/cart
/* router.post('/:idUser/cart',(req,res)=>{
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
  }) */
  module.exports = router;
