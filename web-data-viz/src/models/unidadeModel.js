// Possivelmente esse daqui virará clubeModel porque é uma busca conforme a foreing key

var database = require("../database/config");

function buscarUnidadesPorClube(fkClube) {

  var instrucaoSql = `SELECT * FROM Unidade u WHERE fkClube = ${fkClube}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Cadastrar unidades
function cadastrar(fkClube, nomeUnidade) {
  
  var instrucaoSql = `INSERT INTO Unidade (id, nome, fkClube) VALUES (default, ${nomeUnidade}, ${fkClube})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarUnidadesPorClube,
  cadastrar
}
