var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/unidadeController");

router.get("/:clubeId", function (req, res) {
  unidadeController.buscarUnidadesPorClube(req, res);
});

router.post("/cadastrar", function (req, res) {
  unidadeController.cadastrar(req, res);
})

module.exports = router;