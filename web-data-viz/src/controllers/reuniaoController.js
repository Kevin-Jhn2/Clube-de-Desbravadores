var reuniaoModel = require("../models/reuniaoModel");

// function buscarUltimasMedidas(req, res) {

//     const limite_linhas = 7;

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

//     medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


// function buscarMedidasEmTempoReal(req, res) {

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }
function addreuniao(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var data = req.body.dataServer;
    var descricao = req.body.descricaoServer;

    if(data == undefined){
      res.status(400).send ("data está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!")
    } else if (descricao == undefined) {
        res.status(400).send("descricao está undefined!")
    } else{

    reuniaoModel.addreuniao(idUsuario, data, descricao)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao cadastrar a reunião! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

}

function delreuniao(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var data = req.body.dataServer;
    var descricao = req.body.descricaoServer;

    if(data == undefined){
      res.status(400).send ("data está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!")
    } else if (descricao == undefined) {
        res.status(400).send("descricao está undefined!")
    } else{

    reuniaoModel.delreuniao(idUsuario, data, descricao)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao cadastrar a reunião! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

}


module.exports = {
    addreuniao,
    delreuniao
}