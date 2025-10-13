const Connection = require('../Config/Connection');

class Filial {
    constructor(id, nome, cep, cnpj, contato) {
        this._id = id;          //id do epi
        this._nome = nome;      //nome do epi
        this._cep = cep;
        this._cnpj = cnpj;
        this._contato = contato
    }

    static async criarFilial(nome, cep, cnpj, contato) {
        const Connection = require('../Config/Connection');
        try {
            await Connection.query('START TRANSACTION');
            const resultado = await Connection.execute('INSERT INTO tb_filial (nome,cnpj,contato,cep) VALUES (?,?,?,?)',
                [nome, cnpj, contato, cep]
            )
            return resultado.insertId;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    static async selecFilial() {
        const Connection = require('../Config/Connection');
        try {
            const resultado = await Connection.query('SELECT id_filial, nome FROM tb_filial WHERE TRUE');
            return resultado;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Filial;