var aquarioModel = require("../models/aquarioModel");
var unidadeModel = require("../models/unidadeModel")

function buscarUnidadesPorClube(req, res) {
  var idUsuario = req.params.idUsuario;
  var fkCadastro = req.params.fkcadastro;
  unidadeModel.buscarUnidadesPorClube(fkCadastro).then((resultado) => {
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
  var fkCadastro = req.body.fkcadastro;
  var idUsuario = req.body.idUsuario;
  var nomeUnidade = req.body.unidade;
  if (fkCadastro == undefined) {
    res.status(400).send("fkCadastro está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (nomeUnidade = undefined) {
    res.status(400).send("Nome Unidade está undefined!")
  } else {


    unidadeModel.cadastrar(fkCadastro, idUsuario, nomeUnidade)
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