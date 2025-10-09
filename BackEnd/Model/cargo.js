const Connection = require('../Config/Connection');

class Cargo {
    constructor(id, nome) {
        this._id = id;          //id do epi
        this._nome = nome;      //nome do epi
    }

    static async criarCargo(nome) {
        const Connection = require('../Config/Connection');
        try {
            await Connection.query('START TRANSACTION');
            const resultado = await Connection.execute('INSERT INTO tb_cargo (nome) VALUES (?)',
                [nome]
            )
            return resultado.insertId;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    static async selecCargo() {
        const Connection = require('../Config/Connection');

        try {
            const resultado = await Connection.query('SELECT id, nome FROM tb_cargo WHERE TRUE');
            return resultado;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Cargo;