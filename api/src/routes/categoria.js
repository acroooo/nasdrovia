const server = require('express').Router();
const { Categories } = require('../db.js');


server.put('/:id', async (req,res)=>{
     let id = req.params.id;
     let {name,description} = req.body;
     Categories.update({name,description},{where:{id}})
     .then(category=>res.send(category))
     .catch(err=>res.status(404).json(err))

})
module.exports = server;