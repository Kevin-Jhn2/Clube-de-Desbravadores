var presencaModel = require("../models/presencaModel");

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
function addsituacao(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var data = req.body.dataServer;
    var descricao = req.body.descricaoServer;
    var membro = req.body.nomeMembroServer;
    var unidade = req.body.nomeUnidadeServer;
    var situacao = req.body.situacaoServer;

    if(data == undefined){
      res.status(400).send ("data está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!")
    } else if (descricao == undefined) {
        res.status(400).send("descricao está undefined!")
    } else if (membro == undefined) {
        res.status(400).send("membro está undefined!")
    } else if (unidade == undefined) {
        res.status(400).send("unidade está undefined!")
    } else if (situacao == undefined) {
        res.status(400).send("situacao está undefined!")
    } else{

    presencaModel.addsituacao(idUsuario, data, descricao, membro, unidade, situacao)
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

function delsituacao(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var data = req.body.dataServer;
    var descricao = req.body.descricaoServer;
    var membro = req.body.nomeMembroServer;
    var situacao = req.body.situacaoServer;
    var unidade = req.body.nomeUnidadeServer;

    if(data == undefined){
      res.status(400).send ("data está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("descricao está undefined!");
    } else if (membro == undefined) {
        res.status(400).send("membro está undefined!");
    } else if (unidade == undefined) {
        res.status(400).send("unidade está undefined!");
    } else if (situacao == undefined) {
        res.status(400).send("situacao está undefined!");
    } else{

    presencaModel.delsituacao(idUsuario, data, descricao, membro, unidade, situacao)
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
    addsituacao,
    delsituacao
}