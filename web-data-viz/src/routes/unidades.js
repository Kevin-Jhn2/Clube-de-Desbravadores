var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/unidadeController");
var unidadeController = require("../controllers/unidadeController")

router.get("/:clubeId", function (req, res) {
  unidadeController.buscarUnidadesPorClube(req, res);
});

router.post("/cadastrar", function (req, res) {
    console.log("Caiu no cadastrar no unidades");

  unidadeController.cadastrar(req, res);
});

router.post("/deletar", function (req, res) {
  unidadeController.deletar(req, res);
}),

router.post("/addmembro", function (req, res) {
    console.log("Caiu no addmembro no unidades");

  unidadeController.addmembro(req, res);
});

router.post("/delmembro", function (req, res) {
    console.log("Caiu no delmembro no unidades");

  unidadeController.delmembro(req, res);
});

module.exports = router;