const Connection = require('../Config/Connection');

class Epi {
    constructor(id, nome, cep, cnpj, contato) {
        this._id = id;          //id do epi
        this._nome = nome;      //nome do epi
        this._cep = cep;
        this._cnpj = cnpj;
        this._contato = contato
    }

    static async criarFilial(nome, forn, dtAqui, dtVld, qtd, idEst) {
        const Connection = require('../Config/Connection');
        try {
            await Connection.query('START TRANSACTION');
            let refused = false;
            let idEpi = await Connection.execute('SELECT id FROM tb_epi WHERE nome = ?', [nome]);
            if (!idEpi.find(id => id.id)) {
                const respEpi = await Connection.execute('INSERT INTO tb_epi (nome) VALUE (?)', [nome]);
                idEpi = respEpi.insertId;
            } else {
                idEpi = (idEpi[0].id)
            }
            let idForn = await Connection.execute('SELECT id FROM tb_fornecedor WHERE nome = ?', [forn]);
            if (!idForn.find(id => id.id)) {
                const respForn = await Connection.execute('INSERT INTO tb_fornecedor (nome) VALUE (?)', [forn]);
                idForn = respForn.insertId;
            } else {
                idForn = (idForn[0].id)
            }
            const dtString = new Date(dtAqui);
            const dtVString = new Date(dtVld);

            const resultado = await Connection.execute('INSERT INTO tb_lote_epi (id_epi,qtd,dt_aquisicao,dt_validade,id_fornecedor) VALUES (?,?,?,?,?)',
                [idEpi, qtd, dtString, dtVString, idForn]
            )

            for (var i = 0; i < qtd; i++) {
                const uniEpi = await Connection.execute('INSERT INTO tb_uni_epi (id_lote,id_estado) VALUES (?,?)',
                    [resultado.insertId, idEst]
                );
                console.log(uniEpi);
            }

            if (refused) {
                await Connection.query('ROLLBACK')
            } else {
                await Connection.query('COMMIT');
                return resultado.insertId;
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Epi;