const Connection = require('../Config/Connection');

class Funcionario {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
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
    //#endregion
    //#region Métodos
    static async criarfuncionario(nome) {
        const Connection = require('../Config/Connection');
        const resultado = await Connection.query(
            'INSERT INTO tb_funcionario (nome) VALUES (?)',
            [nome]
        );
        return resultado.insertId;
    }

    static async listarTodos() {
        const resultado = await Connection.query('SELECT * FROM tb_funcionario');
        return resultado;
    }
    //#endregion
}

module.exports = Funcionario;