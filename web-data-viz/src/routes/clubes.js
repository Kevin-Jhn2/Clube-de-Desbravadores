var express = require("express");
var router = express.Router();

var clubeController = require("../controllers/clubeController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    clubeController.cadastrar(req, res);
})

// Possivelmente, esse buscar vai ser o adicionarUnidades

// router.get("/buscar", function (req, res) {
//     clubeController.buscarPorNome(req, res);
// });

router.get("/buscar/:id", function (req, res) {
  clubeController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  clubeController.listar(req, res);
});

module.exports = router;