var membroModel = require("../models/membroModel");

// function listar(req, res) {
//     membroModel.listar().then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

// function listarPorUsuario(req, res) {
//     var idUsuario = req.params.idUsuario;

//     membroModel.listarPorUsuario(idUsuario)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "Houve um erro ao buscar os avisos: ",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function pesquisarDescricao(req, res) {
//     var descricao = req.params.descricao;

//     membroModel.pesquisarDescricao(descricao)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function publicar(req, res) {
//     var titulo = req.body.titulo;
//     var descricao = req.body.descricao;
//     var idUsuario = req.params.idUsuario;

//     if (titulo == undefined) {
//         res.status(400).send("O título está indefinido!");
//     } else if (descricao == undefined) {
//         res.status(400).send("A descrição está indefinido!");
//     } else if (idUsuario == undefined) {
//         res.status(403).send("O id do usuário está indefinido!");
//     } else {
//         membroModel.publicar(titulo, descricao, idUsuario)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             )
//             .catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

// function editar(req, res) {
//     var novaDescricao = req.body.descricao;
//     var idAviso = req.params.idAviso;

//     membroModel.editar(novaDescricao, idAviso)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );

// }

// function deletar(req, res) {
//     var idAviso = req.params.idAviso;

//     membroModel.deletar(idAviso)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }
function addpontos(req, res){
    var idUsuario = req.body.idUsuarioServer;
    var pontos = req.body.pontoServer;
    var membro = req.body.membroServer;
    var unidade = req.body.unidadeServer;

    if(idUsuario == undefined){
        res.status(400).send("idUsuario está undefined!");
    } else if (pontos == undefined) {
        res.status(400).send("pontos está undefined!");
    } else if (membro == undefined) {
        res.status(400).send("membro está undefined!");
    } else if (unidade == undefined) {
        res.status(400).send("unidade está undefined!")
    } else{
        membroModel.addpontos(idUsuario, pontos, membro, unidade)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            console.log(
                "\nHouve um erro ao adicionar pontos! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function delpontos(req, res){
    var idUsuario = req.body.idUsuarioServer;
    var pontos = req.body.pontoServer;
    var membro = req.body.membroServer;
    var unidade = req.body.unidadeServer;

    if(idUsuario == undefined){
        res.status(400).send("idUsuario está undefined!");
    } else if (pontos == undefined) {
        res.status(400).send("pontos está undefined!");
    } else if (membro == undefined) {
        res.status(400).send("membro está undefined!");
    } else if (unidade == undefined) {
        res.status(400).send("unidade está undefined!")
    } else{
        membroModel.delpontos(idUsuario, pontos, membro, unidade)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.log(erro);
            console.log(
                "\nHouve um erro ao remover pontos! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    addpontos,
    delpontos
}