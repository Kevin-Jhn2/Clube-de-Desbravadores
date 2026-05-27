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

function addreuniao(idUsuario, data, descricao) {
    console.log("Veio até o addreuniao");

    var instrucaoSql = `
    INSERT INTO Reuniao (id, data_reuniao, descricao, fkCadastro) VALUES
    (default, '${data}', '${descricao}', ${idUsuario});
    `;

    console.log("Executando a instrução SQL; \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function delreuniao(idUsuario, data, descricao) {
    console.log("Veio até o delreuniao");

    var instrucaoSql = `
    DELETE FROM Reuniao where fkCadastro = ${idUsuario} AND data_reuniao = '${data}' AND descricao = '${descricao}';
    `;

    console.log("Executando a instrução SQL; \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    addreuniao,
    delreuniao    
}
