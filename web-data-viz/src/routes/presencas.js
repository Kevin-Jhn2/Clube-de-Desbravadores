var express = require("express");
var router = express.Router();

var presencaController = require("../controllers/presencaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// });

router.post("/addsituacao", function (req, res) {
    presencaController.addsituacao(req,res);
});

router.post("/delsituacao", function (req, res) {
    presencaController.delsituacao(req,res);
});




module.exports = router;