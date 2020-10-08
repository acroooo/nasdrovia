const express = require("express");
const router = express.Router();
const { Categories, Producto } = require("../db.js");

router.get("/categName", (req, res) => {
  Categories.findAll()
    .then((response) => res.send(response))
    .catch((err) => {
      return res.status(400).send(err);
    });
});
router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let { name, description } = req.body;
  Categories.update({ name, description }, { where: { id } })
    .then((category) => res.send(category))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
