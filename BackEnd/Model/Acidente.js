const Connection = require('../Config/Connection');

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

    static async selecAcidente(param, filter) {
        const Connection = require('../Config/Connection');
        let sql = `
            SELECT 
                l.id AS N_epi,
                a.id AS N_Registro,
                f.nome AS Funcionario,
                e.nome AS Epi,
                a.acidente AS descricao,
                a.dt_acidente AS dt_acidente
            FROM phpmyadmin.tb_acidentes a
            LEFT JOIN phpmyadmin.tb_uni_epi u ON a.id_epi = u.id
            LEFT JOIN phpmyadmin.tb_lote_epi l ON l.id = u.id_lote
            LEFT JOIN phpmyadmin.tb_epi e ON e.id = l.id_epi
            LEFT JOIN phpmyadmin.tb_funcionario f ON f.id = a.id_funcionario
            WHERE TRUE
        `;

        const valores = [];

        if (param) {
            // Se for CPF (contém ponto ou traço)
            if (param.includes('.') || param.includes('-')) {
                sql += ' AND f.cpf LIKE ?';
            }
            // Se for número (registro)
            else if (!isNaN(param)) {
                sql += ' AND a.id = ?';
            }
            // Caso contrário, filtra por nome
            else {
                sql += ' AND f.nome LIKE ?';
            }

            valores.push(`%${param}%`);
        }

        // Ordenação segura
        const colunas = ['dt_acidente', 'Funcionario', 'N_Registro'];
        if (colunas.includes(filter)) {
            sql += ` ORDER BY ${filter}`;
        } else {
            sql += ` ORDER BY dt_acidente`;
        }

        try {
            const [resultado] = await Connection.query(sql, valores);
            return resultado;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = Acidente;