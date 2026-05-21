// Possivelmente esse daqui virará clubeModel porque é uma busca conforme a foreing key

var database = require("../database/config");

function buscarUnidadesPorClube(id) {

  var instrucaoSql = `SELECT * FROM Unidade u WHERE fkCadastro = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Cadastrar unidades
function cadastrar(fkCadastro, nomeUnidade) {
  
  var instrucaoSql = `INSERT INTO Unidade (id, nome, fkCadastro) VALUES (default, ${nomeUnidade}, ${fkCadastro})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarUnidadesPorClube,
  cadastrar
}
