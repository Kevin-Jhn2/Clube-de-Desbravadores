var database = require("../database/config")

function autenticar(email, senha, usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha, usuario)
    // Agora aqui dá para mudar a instrução
    var instrucaoSql = `
        SELECT id, nome, email FROM Cadastro WHERE email = '${email}' AND senha = '${senha}' AND nome = '${usuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, clube) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, clube);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    // Lembrar que precisa primeiro cadastrar o usuario e depois cadastrar o clube

    // Verificar se funciona no npm start depois
    
    var instrucaoSql = `
        INSERT INTO Cadastro (nome, email, senha, nomeClube) VALUES ('${nome}', '${email}', '${senha}', '${clube}');
        `;
        // Esse daqui vai para a criação de unidades JS
        // set @idUsuario = SELECT id FROM Cadastro where nome = '${nome}' AND email = '${email}' AND senha = '${senha}';
        // INSERT INTO Clube (nome, fkCadastro) values ('${clube}', @idUsuario);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};