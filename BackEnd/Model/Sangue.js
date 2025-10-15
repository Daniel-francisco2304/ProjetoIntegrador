const Connection = require('../Config/Connection');

class Sangue {
    constructor(id, nome) {
        this._id = id;          //id do epi
        this._nome = nome;      //nome do epi
    }
    static async selecSangue() {
        const Connection = require('../Config/Connection');
        try {
            const resultado = await Connection.query('SELECT id_sangue, sangue FROM tb_sangue WHERE TRUE ORDER BY id_sangue ASC');
            return resultado;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Sangue;