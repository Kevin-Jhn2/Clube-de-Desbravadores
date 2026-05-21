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
  var fkClube = req.body.fkclube;
  var idUsuario = req.body.idUsuario;
  var nomeUnidade = req.body.unidade;
  if (fkClube == undefined) {
    res.status(400).send("fkClube está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (nomeUnidade = undefined) {
    res.status(400).send("Nome Unidade está undefined!")
  } else {


    unidadeModel.cadastrar(fkClube, idUsuario, nomeUnidade)
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

module.exports = {
  buscarUnidadesPorClube,
  cadastrar
}