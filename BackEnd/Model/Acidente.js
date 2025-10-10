const Connection = require('../Config/Connection');
const md5 = require('md5');

class Acidente {
    constructor(id, id_funcionario, id_epi, acidente, dt_acidente) {
        this._id = id;
        this._id_funcionario = id_funcionario;
        this._id_epi = id_epi;
        this._acidente = acidente;
        this._dt_acidente = dt_acidente;
    }

    //#region Método
    static async criarAcidente(id_funcionario, id_epi, acidente, dt_acidente) {
        const Connection = require('../Config/Connection');
        try {
            const resultado = await Connection.query(
                'INSERT INTO tb_acidentes (id_funcionario, id_epi, acidente, dt_acidente) VALUES (?,?,?,?)',
                [id_funcionario, id_epi, acidente, dt_acidente]
            );
            return resultado.insertId;
        }
        catch (error) {
            console.log(error)
            throw error;
        }
    }
    //#endregion
}
module.exports = Acidente;