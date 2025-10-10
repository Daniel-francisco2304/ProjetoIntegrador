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

#insert into phpmyadmin.tb_estado values (null,'Novo');
#insert into phpmyadmin.tb_estado values (null,'Seminovo');
#insert into phpmyadmin.tb_estado values (null,'Usado');
#insert into phpmyadmin.tb_estado values (null,'Muito Usado');
#insert into phpmyadmin.tb_estado values (null,'Quebrado');
#insert into phpmyadmin.tb_estado values (null,'Avariado');

#insert into phpmyadmin.tb_cargo values (null,'Administrador Geral');

#SELECT 
        e.nome      AS epi,
#       f.nome      AS fornecedor,
#       l.qtd       AS quantidade_lote,
#       l.dt_aquisicao,
#       l.dt_validade,
#       est.nome    AS estado,
#       u.id        AS unidade
#FROM tb_uni_epi u
#LEFT JOIN tb_lote_epi l ON u.id_lote = l.id
#LEFT JOIN tb_epi e      ON l.id_epi = e.id
#LEFT JOIN tb_fornecedor f ON l.id_fornecedor = f.id
#LEFT JOIN tb_estado est ON u.id_estado = est.id;

#SELECT 
#    a.id AS N_Registro,
#    f.nome AS Funcionario,
#    e.nome AS Epi,
#    a.acidente AS descricao,
#    a.dt_acidente AS dt_acidente
#FROM
#    phpmyadmin.tb_acidentes a
#LEFT JOIN phpmyadmin.tb_funcionario f ON f.id = a.id_funcionario 
#LEFT JOIN phpmyadmin.tb_epi e ON e.id = e.id_funcionario 

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema phpmyadmin
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema phpmyadmin
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `phpmyadmin` ;

-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_cargo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome` (`nome` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_filial`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_filial` (
  `id_filial` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cep` CHAR(8) NOT NULL,
  `cnpj` CHAR(14) NOT NULL,
  `contato` CHAR(11) NOT NULL,
  PRIMARY KEY (`id_filial`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) ,
  UNIQUE INDEX `cep_UNIQUE` (`cep` ASC) ,
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC) ,
  UNIQUE INDEX `contato_UNIQUE` (`contato` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_sangue`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_sangue` (
  `id_sangue` INT(11) NOT NULL,
  `sangue` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`id_sangue`),
  UNIQUE INDEX `sangue_UNIQUE` (`sangue` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_funcionario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `cpf` CHAR(11) NOT NULL,
  `email` VARCHAR(20) NOT NULL,
  `contratacao` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `contato1` CHAR(11) NOT NULL,
  `contato2` CHAR(11) NULL DEFAULT '00000000000',
  `emergencia` CHAR(11) NOT NULL,
  `status` CHAR(1) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL DEFAULT '1',
  `alergia` VARCHAR(45) NOT NULL,
  `id_cargo` INT(11) NOT NULL,
  `id_filial` INT(11) NOT NULL DEFAULT 1,
  `id_sangue` INT(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) ,
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) ,
  INDEX `id_cargo` (`id_cargo` ASC) ,
  INDEX `id_filial` (`id_filial` ASC) ,
  INDEX `tb_sangue_fk_sangue_idx` (`id_sangue` ASC) ,
  CONSTRAINT `id_filial`
    FOREIGN KEY (`id_filial`)
    REFERENCES `phpmyadmin`.`tb_filial` (`id_filial`),
  CONSTRAINT `tb_funcionario_ibfk_1`
    FOREIGN KEY (`id_cargo`)
    REFERENCES `phpmyadmin`.`tb_cargo` (`id`),
  CONSTRAINT `tb_sangue_ibfk_1`
    FOREIGN KEY (`id_sangue`)
    REFERENCES `phpmyadmin`.`tb_sangue` (`id_sangue`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_acesso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_acesso` (
  `id_acesso` INT(11) NOT NULL,
  `id_funcionario` INT(11) NOT NULL,
  `id_cargo` INT(11) NOT NULL,
  `id_filial` INT(11) NOT NULL,
  `acesso` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id_acesso`),
  INDEX `idFuncionário_fk_1_idx` (`id_funcionario` ASC) ,
  INDEX `idCargo_fk_2_idx` (`id_cargo` ASC) ,
  INDEX `idFilial_fk_3_idx` (`id_filial` ASC) ,
  CONSTRAINT `idCargo_fk_2`
    FOREIGN KEY (`id_cargo`)
    REFERENCES `phpmyadmin`.`tb_cargo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idFilial_fk_3`
    FOREIGN KEY (`id_filial`)
    REFERENCES `phpmyadmin`.`tb_filial` (`id_filial`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idFuncionário_fk_1`
    FOREIGN KEY (`id_funcionario`)
    REFERENCES `phpmyadmin`.`tb_funcionario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_epi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_epi` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `id_ca` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) ,
  INDEX `fk_ca_idx` (`id_ca` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 37
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_fornecedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_fornecedor` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_lote_epi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_lote_epi` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_epi` INT(11) NOT NULL,
  `qtd` INT(11) NOT NULL DEFAULT 0,
  `dt_aquisicao` DATETIME NOT NULL,
  `dt_validade` DATETIME NOT NULL,
  `id_fornecedor` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_epi` (`id_epi` ASC) ,
  INDEX `id_fornecedor` (`id_fornecedor` ASC) ,
  CONSTRAINT `tb_lote_epi_ibfk_1`
    FOREIGN KEY (`id_epi`)
    REFERENCES `phpmyadmin`.`tb_epi` (`id`),
  CONSTRAINT `tb_lote_epi_ibfk_2`
    FOREIGN KEY (`id_fornecedor`)
    REFERENCES `phpmyadmin`.`tb_fornecedor` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_estado` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_uni_epi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_uni_epi` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_lote` INT(11) NOT NULL,
  `id_estado` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_lote` (`id_lote` ASC) ,
  INDEX `id_estado` (`id_estado` ASC) ,
  CONSTRAINT `tb_uni_epi_ibfk_1`
    FOREIGN KEY (`id_lote`)
    REFERENCES `phpmyadmin`.`tb_lote_epi` (`id`),
  CONSTRAINT `tb_uni_epi_ibfk_3`
    FOREIGN KEY (`id_estado`)
    REFERENCES `phpmyadmin`.`tb_estado` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_acidentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_acidentes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_funcionario` INT(11) NOT NULL,
  `id_epi` INT(11) NOT NULL,
  `acidente` VARCHAR(150) NOT NULL,
  `dt_acidente` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_funcionario_fk_1_idx` (`id_funcionario` ASC) ,
  INDEX `id_epi_fk_2_idx` (`id_epi` ASC) ,
  CONSTRAINT `id_epi_fk_2`
    FOREIGN KEY (`id_epi`)
    REFERENCES `phpmyadmin`.`tb_uni_epi` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_funcionario_fk_1`
    FOREIGN KEY (`id_funcionario`)
    REFERENCES `phpmyadmin`.`tb_funcionario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_alocacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_alocacao` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_uni` INT(11) NOT NULL,
  `id_funcionario` INT(11) NOT NULL,
  `dt_alocacao` DATETIME NOT NULL,
  `dt_retorno` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_funcionario` (`id_funcionario` ASC) ,
  INDEX `id_uni` (`id_uni` ASC) ,
  CONSTRAINT `tb_alocacao_ibfk_1`
    FOREIGN KEY (`id_funcionario`)
    REFERENCES `phpmyadmin`.`tb_funcionario` (`id`),
  CONSTRAINT `tb_alocacao_ibfk_2`
    FOREIGN KEY (`id_uni`)
    REFERENCES `phpmyadmin`.`tb_uni_epi` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `phpmyadmin`.`tb_ca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phpmyadmin`.`tb_ca` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `ca` VARCHAR(15) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
