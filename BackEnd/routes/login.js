const express = require('express');
const router = express.Router();
const Funcionario = require('../Model/Funcionario');

router.post('/', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const total = await Funcionario.loginFuncionario(email, senha);

    if (total === 1) {
      res.json({ sucesso: true });
      console.log('Login realizado com sucesso');
    } else {
      res.status(401).json({ erro: 'Credenciais inválidas' });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
});

module.exports = router;
