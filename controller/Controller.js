const Usuario = require('../Model/usuario');

const Controller = {
  listarUsuarios: (req, res) => {
    Usuario.getAll((err, results) => {
      if (err) return res.status(500).send('Erro ao buscar usuários');
      res.json(results);
    });
  }
};

module.exports = Controller;