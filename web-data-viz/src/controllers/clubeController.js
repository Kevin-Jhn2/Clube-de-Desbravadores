var clubeModel = require("../models/clubeModel");

// function buscarPorCnpj(req, res) {
//   var cnpj = req.query.cnpj;

//   clubeModel.buscarPorCnpj(cnpj).then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

function listar(req, res) {
    clubeModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

    clubeModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

// Talvez o AdicionarUnidades
// function cadastrar(req, res) {
// //   var cnpj = req.body.cnpj;
// //   var razaoSocial = req.body.razaoSocial;
    
//     clubeModel.buscarPorNome(nome).then((resultado) => {
//     if (resultado.length > 0) {
//       res
//         .status(401)
//         .json({ mensagem: `O clube com o nome ${nome} já existe` });
//     } else {
//         clubeModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
//         res.status(201).json(resultado);
//       });
//     }
//   });
// }

module.exports = {
  buscarPorId,
  listar
};
