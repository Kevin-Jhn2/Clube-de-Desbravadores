var express = require("express");
var router = express.Router();

var reuniaoController = require("../controllers/reuniaoController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// });

router.post("/addreuniao", function (req, res) {
    reuniaoController.addreuniao(req,res);
});

router.post("/delreuniao", function (req, res) {
    reuniaoController.delreuniao(req,res);
});




module.exports = router;