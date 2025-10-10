const Connection = require('../Config/Connection');
const md5 = require('md5');

class Funcionario {
    constructor(id, nome, cpf, email, dtContratacao, cargo) {
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
        this._dtContratacao = dtContratacao;
        this._cargo = cargo;
    }
    //#region Atributos
    get id() { return this._id; }
    set id(id) { this._id = id; }

    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }

    get cpf() { return this._cpf }
    set cpf(cpf) { this._cpf = cpf; }

    get email() { return this._email; }
    set email(email) { this._email = email; }

    get dtContratacao() { return this._dtContratacao; }
    set dtContratacao(dtContratacao) { this._dtContratacao = dtContratacao; }

    get cargo() { return this._cargo; }
    set cargo(cargo) { this._cargo = cargo; }
    //#endregion

    //#region Método
    static async criarfuncionario(nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia) {
        const Connection = require('../Config/Connection');
        try {
            if (dtContratacao === null) {
                const resultado = await Connection.query(
                    'INSERT INTO tb_funcionario (nome, cpf, email, contato1, contato2, emergencia, status, alergia, id_cargo, id_filial) VALUES (?,?,?,?,?,?,?,?,1,1)',
                    [nome, cpf, email, contato1, contato2, emergencia, status, alergia]
                );
                return resultado.insertId;
            } else {
                const resultado = await Connection.query(
                    'INSERT INTO tb_funcionario (nome, cpf, email, contratacao, contato1, contato2, emergencia, status, alergia, id_cargo, id_filial) VALUES (?,?,?,?,?,?,?,?,?,1,1)',
                    [nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia]
                );
                return resultado.insertId;
            }
        }
        catch (error) {
            console.log(error)
            throw error;
        }
    }
    static async alterarfuncionario(nome, id) {
        const Connection = require('../Config/Connection');
        try {
            const resultado = await Connection.query(
                'UPDATE tb_funcionario SET nome = (?) WHERE id = (?)',
                [nome, id]
            );
            return resultado.affectedRows;
        } catch (error) {
            throw error;
        }
    }

    static async excluirFuncionario(id) {
        const Connection = require('../Config/Connection');
        try {
            const resultado = await Connection.query('DELETE FROM phpmyadmin.tb_funcionario WHERE id = (?)',
                [id]
            );
            return resultado.affectedRows;
        } catch (error) {
            throw error;
        }
    }
    static async selecFuncionario(param, filtro) {
        let sql = 'SELECT f.id as Registro, f.nome AS f_nome, f.cpf, f.email, f.contato1, f.contato2, f.emergencia, f.status as CStatus, f.alergia, f.contratacao, c.nome AS c_nome, l.nome AS Loja FROM phpmyadmin.tb_funcionario f LEFT JOIN tb_filial l ON f.id_filial = l.id_filial LEFT JOIN tb_cargo c ON f.id_cargo = c.id WHERE TRUE';
        const valores = [];

        if (param) {
            const isEmail = param.includes('@') || param.includes('.');
            if (isEmail) {
                sql += ' AND email LIKE ? ';
            } else {
                sql += ' AND f.nome LIKE ? ';
            }
            valores.push(`%${param}%`);
        }
        const colunas = ['f_nome', 'email', 'contratacao'];

        if (colunas.includes(filtro)) {
            sql += ` ORDER BY ${filtro}`;
        } else {
            sql += ` ORDER BY f.nome`; // padrão de segurança
        }

        try {
            const rows = await Connection.query(sql, valores);
            return rows;
        } catch (err) {
            throw err;
        }
    }
    //#endregion
}

module.exports = Funcionario;