var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM empresa`;

  return database.executar(instrucaoSql);
}

// Talvez o adicionarUnidades
// function buscarPorNome(nome) {
//   var instrucaoSql = `SELECT * FROM empresa WHERE nome = '${nome}'`;

//   return database.executar(instrucaoSql);
// }

// function cadastrar(razaoSocial, cnpj) {
//   var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

//   return database.executar(instrucaoSql);
// }

// Tirei alguns pontos do module.exports
module.exports = {buscarPorId, listar};
