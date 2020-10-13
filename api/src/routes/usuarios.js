const router = require("express").Router();
const { Usuario} = require("../db.js");



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


module.exports = router;

