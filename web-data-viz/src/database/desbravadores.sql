create database Desbravadores;

drop database Desbravadores; -- Não esquecer de tirar

use Desbravadores;

drop table Cadastro;
create table Cadastro(
    id int primary key auto_increment,
    nome varchar(200),
    email varchar(200),
    senha varchar(256)
);
desc Cadastro;

drop table Clube;
create table Clube (
	fkCadastro int,
    nome varchar(200),
    constraint fk_cadastro foreign key (fkCadastro)
    references Cadastro (id),
    constraint pk primary key (fkCadastro)
);
desc Clube;

create table Unidade (
	id int primary key auto_increment,
    nome varchar(200),
    fkClube int,
    constraint fk_clube foreign key (fkClube)
    references Clube (fkCadastro)
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

