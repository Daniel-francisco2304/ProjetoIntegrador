const db = require('../config/Conexao');

const Usuario = {
  getAll: (callback) => {
    db.query('SELECT * FROM tb_epi', callback);
  }
};

module.exports = Usuario;
