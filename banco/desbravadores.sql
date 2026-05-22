create database Desbravadores;

drop database Desbravadores; -- Não esquecer de tirar

use Desbravadores;

drop table Cadastro;
create table Cadastro(
    id int primary key auto_increment,
    nome_usuario varchar(200),
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


-- Beleza, entendi! Vou te trazer um contexto: o meu projeto é sobre um site de gerenciar reuniões do Clube de Desbravadores. Daí tem um banco de dados como: create database Desbravadores;



-- -- drop database Desbravadores; -- Não esquecer de tirar



-- use Desbravadores;

-- select * from Cadastro;

-- -- drop table Cadastro;

-- create table Cadastro(

--     id int primary key auto_increment,

--     nome varchar(200),

--     email varchar(200),

--     senha varchar(256),

--     nomeClube varchar(200)

-- );

-- desc Cadastro;

-- insert into Unidade values 

-- (null, 'unidade a', 1);

-- create table Unidade (

--     id int primary key auto_increment,

--     nome varchar(200),

--     fkCadastro int,

--     constraint fk_cadastro foreign key (fkCadastro)

--     references Cadastro (id)

-- );

-- desc Unidade;



-- create table Membro (

--     id int primary key auto_increment,

--     nome varchar(200),

--     pontos int,

--     fkUnidade int,

--     constraint fk_unidade foreign key (fkUnidade)

--     references Unidade(id)

    

-- );

-- desc Membro;



-- create table Reuniao (

-- id int primary key auto_increment,

-- data_reuniao date

-- );

-- desc Reuniao;



-- create table Presenca (

--     fkReuniao int,

--     fkMembro int,

--     constraint fk_reuniao foreign key (fkReuniao)

--     references Reuniao (id),

--     constraint fk_membro foreign key (fkMembro)

--     references Membro (id)

-- );

-- desc Presenca;



-- E a minha ideia é usar a presença dos usuários adicionados para fazer um gráfico de presença média do Clube, além de outros tipos. Depois mando mais informações.