//Conexão com banco de dados
const mysql = require('mysql2'); //"""Import"""

//Dados de Conexão
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_SGST'
});

// Log de Erro
connection.connect(err => {
  if (err) console.error('Erro ao conectar:', err);
  else console.log('Conectado no MariaDB');
});

//"""Export"""
module.exports = connection;