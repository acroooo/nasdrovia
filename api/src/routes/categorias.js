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

module.exports = router;