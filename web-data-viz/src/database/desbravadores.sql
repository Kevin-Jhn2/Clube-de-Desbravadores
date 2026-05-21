create database Desbravadores;

-- drop database Desbravadores; -- Não esquecer de tirar

use Desbravadores;
select * from Cadastro;
-- drop table Cadastro;
create table Cadastro(
    id int primary key auto_increment,
    nome varchar(200),
    email varchar(200),
    senha varchar(256),
    nomeClube varchar(200)
);
desc Cadastro;
insert into Unidade values 
(null, 'unidade a', 1);
create table Unidade (
	id int primary key auto_increment,
    nome varchar(200),
    fkCadastro int,
    constraint fk_cadastro foreign key (fkCadastro)
    references Cadastro (id)
);
desc Unidade;

create table Membro (
	id int primary key auto_increment,
    nome varchar(200),
    pontos int,
    fkUnidade int,
    constraint fk_unidade foreign key (fkUnidade)
    references Unidade(id)
    
);
desc Membro;

create table Reuniao (
id int primary key auto_increment,
data_reuniao date
);
desc Reuniao;

create table Presenca (
	fkReuniao int,
    fkMembro int,
    constraint fk_reuniao foreign key (fkReuniao)
    references Reuniao (id),
    constraint fk_membro foreign key (fkMembro)
    references Membro (id)
);
desc Presenca;

