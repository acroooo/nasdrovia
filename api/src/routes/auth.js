const router = require("express").Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local'),(req,res)=>{
    res.status(201).json("Usuario se encuentra logueado");
});

router.post('/logout', (req, res)=>{
    req.logout();
    res.status(201).json("Usuario deslogueado");
   
});


router.get('/me',(req,res)=>{
    if(req.isAuthenticated())return res.send(req.usuario);
    else return res.status(401).send("Usuario no se encuentra logueado");
});



 module.exports=router; 
