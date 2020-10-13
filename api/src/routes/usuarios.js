const router = require("express").Router();
const { Usuario} = require("../db.js");



router.post("/", async (req, res, next) => {
  let { nombre, rol, email, contrasena} = req.body;
  if(email){
    let emailExistente = await Usuario.findOne({ where: { email: email } });
    if(emailExistente){
      res.status(400).json({ Error: "Email ya registrado" });
    }else{
      if (nombre  && email  && contrasena) {
        let nuevo_usuario = await Usuario.create({
          name: nombre,
          rol: rol,
          email: email,
          password: contrasena,
        });
        res.status(201).json(nuevo_usuario);
      } else {
        res.status(400).json({ Error: "Faltan parametros" });
      }
    }
  }else{
    res.status(400).json({ Error: "Faltan parametros" });
  }

  
});


module.exports = router;

