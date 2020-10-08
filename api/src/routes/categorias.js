const e = require('express')
const express = require('express')
const router = express.Router()
const { Categories, Producto } = require("../db.js")

router.get("/categName", (req, res) => {
    Categories.findAll()
        .then(
            response => res.send(response)
        )
        .catch(err => { return res.status(400).send(err) })
})

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    Categories.destroy({ where: { id } })
        .then(response => {
            if (response === 0) return res.status(400)
            else return res.status(201)
        })
})

module.exports = router;