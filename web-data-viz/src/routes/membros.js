var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");
var membroController = require("../controllers/membroController");

router.post("/addpontos", function (req, res){
    membroController.addpontos(req, res);
})

router.post("/delpontos", function (req, res) {
    membroController.delpontos(req, res);
})

// Gráfico de desempenho
router.get("/ultimas/:idUnidade", function (req, res) {
    membroController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUnidade", function (req, res) {
    membroController.buscarMedidasEmTempoReal(req, res);
});

















// router.get("/listar", function (req, res) {
//     avisoController.listar(req, res);
// });

// router.get("/listar/:idUsuario", function (req, res) {
//     avisoController.listarPorUsuario(req, res);
// });

// router.get("/pesquisar/:descricao", function (req, res) {
//     avisoController.pesquisarDescricao(req, res);
// });

// router.post("/publicar/:idUsuario", function (req, res) {
//     avisoController.publicar(req, res);
// });

// router.put("/editar/:idAviso", function (req, res) {
//     avisoController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//     avisoController.deletar(req, res);
// });

module.exports = router;