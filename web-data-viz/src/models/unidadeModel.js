// Possivelmente esse daqui virará clubeModel porque é uma busca conforme a foreing key

var database = require("../database/config");

function buscarUnidadesPorClube(idUsuario) {

  var instrucaoSql = `SELECT * FROM Unidade WHERE fkCadastro = ${idUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Cadastrar unidades
function cadastrar(idUsuario, nomeUnidade) {
  console.log("caiu no cadastrar")

  var instrucaoSql = `
  DELETE FROM Unidade where nome is null;
  INSERT INTO Unidade (id, nome, fkCadastro) VALUES (default, '${nomeUnidade}', ${idUsuario});
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idUsuario, nomeUnidade){
  console.log("caiu no deletar");
  var instrucaoSql = `
  DELETE FROM Unidade where nome = '${nomeUnidade}' AND fkCadastro = ${idUsuario};
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function addmembro (idUsuario, nomeUnidade, nomeMembro){
  console.log("Caiu no addmembro");

  var instrucaoSql = `
  set @idUnidadeMembro = (SELECT id from Unidade where fkCadastro = ${idUsuario} AND nome = '${nomeUnidade}');
  INSERT INTO Membro (id, nome, fkUnidade) values (default, '${nomeMembro}', @idUnidadeMembro);
`;

console.log("Executando a instrução SQL; \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function delmembro (idUsuario, nomeUnidade, nomeMembro){
  console.log("Caiu no delmembro");

  var instrucaoSql = `
  set @idUnidadeMembro = (SELECT id from Unidade where fkCadastro = ${idUsuario} AND nome = '${nomeUnidade}');
  set @idDelMembro = (SELECT id FROM Membro where fkUnidade = @idUnidadeMembro AND nome = '${nomeMembro}');  
  DELETE FROM Membro where id = @idDelMembro;
`;

console.log("Executando a instrução SQL; \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function ultimoId_unidade (){
  console.log("Caiu no ultimoId_unidade");

  var instrucaoSql = `
  SELECT id FROM Unidade order by id desc limit 1;
  `;

console.log("Executando a instrução SQL; \n" + instrucaoSql);
return database.executar(instrucaoSql);
}


module.exports = {
  buscarUnidadesPorClube,
  cadastrar,
  deletar,
  addmembro,
  delmembro,
  ultimoId_unidade
}
