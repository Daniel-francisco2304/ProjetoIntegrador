const Connection = require('../Config/Connection');
const md5 = require('md5');

class Funcionario {
    constructor(id, nome, email, senha) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._senha = senha;
    }
    //#region Atributos
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get senha() {
        return this._senha;
    }
    set senha(senha) {
        this._senha = senha;
    }
    //#endregion

    //#region Métodos

    static async loginFuncionario(email, senha) {
        const resultado = await Connection.query(
            'SELECT COUNT(*) AS total FROM tb_funcionario WHERE email = ? AND senha = ?',
            [email, md5(senha)]
        );

        // resultado = [ { total: 1 } ] se encontrou
        return resultado[0].total; // retorna 0 (inválido) ou 1 (válido)
    }

    static async criarfuncionario(nome, email, senha) {
        const Connection = require('../Config/Connection');
        const resultado = await Connection.query(
            'INSERT INTO tb_funcionario (nome,email,senha) VALUES (?,?,?)',
            [nome, email, md5(senha)]
        );
        return resultado.insertId;
    }

    static async alterarfuncionario(nome, id) {
        const Connection = require('../Config/Connection');
        const resultado = await Connection.query(
            'UPDATE tb_funcionario SET nome = (?) WHERE id = (?)',
            [nome, id]
        );
        return resultado.insertId;
    }

    static async excluirFuncionario(id) {
        const sql = 'DELETE FROM tb_funcionario WHERE id = ?';
        const resultado = await Connection.query(sql, [id]);
        return resultado.affectedRows;
    }

    static async listarTodos(callback) {
        const sql = 'SELECT * FROM tb_funcionario ;';
        Connection.query(sql, (err, results) => {
            if (err) return callback(err);
            callback(null, results)
        })
    }
    //#endregion
}

module.exports = Funcionario;