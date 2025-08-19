create database if not exists td187899_sgtst;
use td187899_sgtst;

create table if not exists tb_epi(
id int not null primary key auto_increment,
nome varchar(50) not null unique
);
create table if not exists tb_fornecedor(
id int not null primary key auto_increment,
nome varchar(50) not null
);
create table if not exists tb_ca(
id int not null primary key auto_increment,
ca varchar(15) not null default 0
);
create table if not exists tb_cargo(
id int not null auto_increment primary key,
nome varchar(50) not null unique
);
create table if not exists tb_funcionario(
id int not null primary key auto_increment,
nome varchar(50) not null,
email varchar(100) not null unique,
contratacao datetime not null default current_timestamp(),
id_cargo int not null,
foreign key (id_cargo) references tb_cargo(id)
);
create table if not exists tb_lote_epi(
id int not null primary key auto_increment,
id_epi int not null,
qtd int not null default 0,
dt_aquisicao date not null,
dt_validade date not null,
id_fornecedor int not null,
foreign key (id_epi) references tb_epi(id),
foreign key (id_fornecedor) references tb_fornecedor(id)
);
create table if not exists tb_estado(
id int not null primary key auto_increment,
nome varchar(50) not null
);
create table if not exists tb_uni_epi(
  id int not null primary key auto_increment,
  id_lote int not null,
  id_estado int not null,
  foreign key (id_lote) references tb_lote_epi(id),
  foreign key (id_estado) references tb_estado(id)
);
create table if not exists tb_alocacao(
  id int not null primary key auto_increment,
  id_uni int not null,
  id_funcionario int not null,
  dt_alocacao datetime not null,
  dt_retorno datetime,
  foreign key (id_funcionario) references tb_funcionario(id),
  foreign key (id_uni) references tb_uni_epi(id)
);