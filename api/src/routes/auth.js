const router = require("express").Router();
const {Usuario} = require("../db");
const passport = require('passport');

router.post('/login', passport.authenticate('local'),(req,res)=>{
    res.status(201).json("Usuario se encuentra logueado");
});

router.post('/logout', function(req, res){
    req.logout();
    res.status(201).json("Usuario deslogueado");
});

module.exports=router;