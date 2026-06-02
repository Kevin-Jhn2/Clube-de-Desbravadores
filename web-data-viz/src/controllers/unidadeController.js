var aquarioModel = require("../models/aquarioModel");
var unidadeModel = require("../models/unidadeModel")

function buscarUnidadesPorClube(req, res) {
  var idUsuario = req.params.idUsuario;

  unidadeModel.buscarUnidadesPorClube(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as unidades: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

// cadastrar unidades
function cadastrar(req, res) {
  console.log("Caiu no cadastrar no controller");

  var nomeUnidade = req.body.nomeUnidadeServer;
  var idUsuario = req.body.idUsuarioServer
  // var fkCadastro = req.body.fkcadastro;
  // var idUsuario = req.body.idUsuario;
  // var nomeUnidade = req.body.unidade;
  // if (fkCadastro == undefined) {
  //   res.status(400).send("fkCadastro está undefined!");
  // } else if (idUsuario == undefined) {
  //   res.status(400).send("idUsuario está undefined!");
  // } else if (nomeUnidade = undefined) {
  //   res.status(400).send("Nome Unidade está undefined!")
  // } else {
    if(nomeUnidade == undefined){
      res.status(400).send ("nomeUnidade está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!")
    }else{

    unidadeModel.cadastrar(idUsuario, nomeUnidade)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function deletar(req, res){
  var nomeUnidade = req.body.nomeUnidadeServer;
  var idUsuario = req.body.idUsuarioServer

    if(nomeUnidade == undefined){
      res.status(400).send ("nomeUnidade está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!")
    }else{

    unidadeModel.deletar(idUsuario, nomeUnidade)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

}

function addmembro(req, res){
  console.log("Caiu no addmembro no controller");


  var nomeUnidade = req.body.nomeUnidadeServer;
  var nomeMembro = req.body.nomeMembroServer;
  var idUsuario = req.body.idUsuarioServer;

    if(nomeUnidade == undefined){
      res.status(400).send ("nomeUnidade está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!")
    } else if(nomeUnidade == undefined){
      res.status(400).send ("nomeMembro está undefined!");
    } else{

    unidadeModel.addmembro(idUsuario, nomeUnidade, nomeMembro)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

}

function delmembro(req, res){
  console.log("Caiu no delmembro no controller");


  var nomeUnidade = req.body.nomeUnidadeServer;
  var nomeMembro = req.body.nomeMembroServer;
  var idUsuario = req.body.idUsuarioServer;

    if(nomeUnidade == undefined){
      res.status(400).send ("nomeUnidade está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!")
    } else if(nomeUnidade == undefined){
      res.status(400).send ("nomeMembro está undefined!");
    } else{

    unidadeModel.delmembro(idUsuario, nomeUnidade, nomeMembro)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

}


function ultimoId_unidade(req, res){


    unidadeModel.ultimoId_unidade()
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  

}

function obterDados (req, res){
  var idUsuario = req.params.idUsuarioVar;

    unidadeModel.obterDados(idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });

}


module.exports = {
  buscarUnidadesPorClube,
  cadastrar,
  deletar,
  addmembro,
  delmembro,
  ultimoId_unidade,
  obterDados
}