const router = require("express").Router();
const {Usuario} = require("../db");
const passport = require('passport');

router.post('/login', passport.authenticate('local'),(req,res)=>{
    res.status(201).json("Usuario se encuentra logueado");
});

module.exports=router;