const mysql = require('mysql2');

class Connection {
    constructor() {
        this.Connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db_SGST',
        });

        this.Connection.connect((err) => {
            if (err) {
                console.log('Erro ao conectar:', err);
            } else {
                console.log('Conectado!');
            }
        })
    }
    query(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.Connection.query(sql, params, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
    close() {
        this.Connection.end();
    }
}

module.exports = new Connection();