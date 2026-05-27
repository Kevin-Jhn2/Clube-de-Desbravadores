var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function addsituacao(idUsuario, data, descricao, membro, unidade, situacao) {
    console.log("Veio até o addsituacao");

    var instrucaoSql = `
    set @idReuniao = (SELECT id FROM Reuniao where data_reuniao = '${data}' AND descricao = '${descricao}' AND fkCadastro = ${idUsuario} );
    set @idUnidade = (SELECT id FROM Unidade where nome = '${unidade}' AND fkCadastro = ${idUsuario});
    set @idMembro = (SELECT id FROM Membro where nome = '${membro}' AND fkUnidade = @idUnidade);
    INSERT INTO Presenca (fkReuniao, fkMembro, descricao) VALUES
    (@idReuniao, @idMembro, '${situacao}');
    `;

    console.log("Executando a instrução SQL; \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function delsituacao(idUsuario, data, descricao, membro, unidade, situacao) {
    console.log("Veio até o delsituacao");

    var instrucaoSql = `
    set @idUnidade = (SELECT id FROM Unidade where nome = '${unidade}' AND fkCadastro = ${idUsuario});
    set @idMembro = (SELECT id FROM Membro where nome = '${membro}' AND fkUnidade = @idUnidade);
    set @idReuniao = (SELECT id FROM Reuniao where fkCadastro = ${idUsuario} AND descricao = '${descricao}' AND data_reuniao = '${data}');
    DELETE FROM Presenca where fkReuniao = @idReuniao AND fkMembro =  @idMembro AND descricao = '${situacao}';
    `;

    console.log("Executando a instrução SQL; \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    addsituacao,
    delsituacao    
}
