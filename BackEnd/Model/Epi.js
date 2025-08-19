const Connection = require('../Config/Connection');
const md5 = require('md5');

class Epi {
    constructor(id, nome, idForn, forn, idCa, Ca, idEst, est, idAloc, dtAloc, dvAloc) {
        this._id = id;          //id do epi
        this._nome = nome;      //nome do epi

        this._idForn = idForn;  //id do fornecedor
        this._forn = forn;      //fornecedor

        this._idCa = idCa;      //id do Ca
        this._Ca = Ca;          //Ca

        this._idEst = idEst;    //id do Estado
        this._est = est;        //Estado de uso

        this._idUni = idUni;    //id do Estado
        this._est = est;        //Estado de uso

        this._idAloc = idAloc   //id da alocação
        this._dtAloc = dtAloc   //data da alocação
        this._dvAloc = dvAloc   //data da devolução do EPI
    }
    static async criarNomeEpi(nome) {
        const Connection = require('../Config/Connection');

        try {
            const [resultado] = await Connection.query(
                'INSERT INTO tb_epi (nome) VALUES (?)',
                [nome]
            );

            return resultado.insertId; // retorna o ID do novo registro
        } catch (err) {
            console.error("Erro ao inserir EPI:", err);
            throw err;
        }
    }

}

module.exports = Epi;