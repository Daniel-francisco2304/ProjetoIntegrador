const Connection = require('../Config/Connection');

class Status {
    constructor(id, nome) {
        this._id = id;
        this._nome = nome;
    }
    static async selecStatus() {
        const Connection = require('../Config/Connection');
        try {
            const resultado = await Connection.query('SELECT id_status, _status FROM tb_status WHERE TRUE');
            return resultado;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Status;