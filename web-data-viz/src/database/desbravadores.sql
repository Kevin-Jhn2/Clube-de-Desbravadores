create database Desbravadores;

-- drop database Desbravadores; -- Não esquecer de tirar

use Desbravadores;

-- drop table Cadastro;
create table Cadastro(
    id int primary key auto_increment,
    nome varchar(200) NOT NULL,
    email varchar(200) NOT NULL UNIQUE,
    senha varchar(256) NOT NULL,
    nomeClube varchar(200) NOT NULL
);

create table Unidade (
	id int primary key auto_increment,
    nome varchar(200),
    fkCadastro int NOT NULL,
    constraint fk_cadastro foreign key (fkCadastro)
    references Cadastro (id)
);
desc Unidade;

create table Membro (
	id int primary key auto_increment,
    nome varchar(200) NOT NULL,
    pontos int,
    fkUnidade int NOT NULL,
    constraint fk_unidade foreign key (fkUnidade)
    references Unidade(id)
    
);
desc Membro;

create table Reuniao (
id int primary key auto_increment,
data_reuniao date,
descricao varchar(750),
fkCadastro int,
constraint fk_cadastroReuniao foreign key (fkCadastro)
references Cadastro(id)
);
desc Reuniao;

create table Presenca (
	fkReuniao int NOT NULL,
	fkMembro int NOT NULL,
    descricao varchar(14),
    constraint chk_presenca check (descricao in ("Presente", "Ausente", "Justificado")),
    constraint fk_reuniao foreign key (fkReuniao)
    references Reuniao (id),
    constraint fk_membro foreign key (fkMembro)
    references Membro (id),
    constraint pk_presenca primary key (fkReuniao, fkMembro)
);
desc Presenca;
select * from Unidade;
select id from Unidade where fkCadastro = 1;
select * from Membro;
-- select * from Cadastro;
select * from Reuniao;
select * from Presenca;

INSERT INTO Cadastro (nome, email, senha, nomeClube) VALUES
('Cláudio Souza', 'claudio@email.com', 'senha123_hash', 'Heróis do Amanhã'),
('Ana Paula Silva', 'ana.paula@email.com', 'senha456_hash', 'Pioneiros do Vale'),
('Marcos Santos', 'marcos.s@email.com', 'senha789_hash', 'Constelações'),
('Beatriz Rocha', 'beatriz@email.com', 'senhaabc_hash', 'Guardiões da Natureza'),
('Carlos Eduardo', 'cadu@email.com', 'senhaxyz_hash', 'Guerreiros da Fé'),
('Fernanda Lima', 'fernanda@email.com', 'senha111_hash', 'Astros do Rei'),
('Ricardo Alves', 'ricardo@email.com', 'senha222_hash', 'Luz do Oriente'),
('Juliana Costa', 'juliana@email.com', 'senha333_hash', 'Sentinelas'),
('Gabriel Mendes', 'gabriel@email.com', 'senha444_hash', 'Desbravadores do Sudoeste'),
('Mariana Antunes', 'mariana@email.com', 'senha555_hash', 'Alvorada');

INSERT INTO Unidade (nome, fkCadastro) VALUES
('Águia', 1),
('Leão', 1),
('Tubarão', 2),
('Pantera', 2),
('Urso', 3),
('Fênix', 4),
('Falcão', 5),
('Lobo', 6),
('Condor', 7),
('Guepardo', 8);

INSERT INTO Membro (nome, pontos, fkUnidade) VALUES
('Lucas Oliveira', 150, 1),
('Julia Almeida', 180, 1),
('Mateus Henrique', 120, 2),
('Larissa Manoela', 200, 3),
('Thiago Soares', 90, 4),
('Amanda Vieira', 160, 5),
('Bruno Rodrigues', 110, 6),
('Camila Pitanga', 175, 7),
('Diego Souza', 130, 8),
('Elena Gilbert', 195, 9);

INSERT INTO Reuniao (data_reuniao, descricao, fkCadastro) VALUES
('2026-03-01', 'Reunião de Abertura do Ano Letivo', 1),
('2026-03-08', 'Planejamento de Campori', 1),
('2026-03-15', 'Classe Regular e Especialidades', 2),
('2026-03-22', 'Treinamento de Ordem Unida', 2),
('2026-04-05', 'Caminhada Ecológica', 3),
('2026-04-12', 'Instrução de Nós e Amarras', 4),
('2026-04-19', 'Atividade Comunitária', 5),
('2026-04-26', 'Pernoite e Fogo do Conselho', 6),
('2026-05-03', 'Ensaio de Fanfarra', 7),
('2026-05-10', 'Avaliação de Classes', 8);

INSERT INTO Reuniao (data_reuniao, descricao, fkCadastro) VALUES
('2026-03-01', 'Reunião de Abertura do Ano Letivo', 1),
('2026-03-08', 'Planejamento de Campori', 1),
('2026-03-15', 'Classe Regular e Especialidades', 2),
('2026-03-22', 'Treinamento de Ordem Unida', 2),
('2026-04-05', 'Caminhada Ecológica', 3),
('2026-04-12', 'Instrução de Nós e Amarras', 4),
('2026-04-19', 'Atividade Comunitária', 5),
('2026-04-26', 'Pernoite e Fogo do Conselho', 6),
('2026-05-03', 'Ensaio de Fanfarra', 7),
('2026-05-10', 'Avaliação de Classes', 8);

INSERT INTO Presenca (fkReuniao, fkMembro, descricao) VALUES
(1, 1, 'Presente'),
(1, 2, 'Presente'),
(1, 3, 'Ausente'),
(2, 1, 'Presente'),
(2, 2, 'Justificado'),
(3, 4, 'Presente'),
(4, 5, 'Presente'),
(5, 6, 'Ausente'),
(6, 7, 'Presente'),
(7, 8, 'Justificado');