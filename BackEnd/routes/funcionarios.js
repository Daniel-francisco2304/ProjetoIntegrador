const express = require('express');
const router = express.Router();
const Funcionario = require('../Model/Funcionario');

router.get('/', async (req, res) => {
  const { q } = req.query;
  console.log('Recebido q:', q)

  try {
    const rows = await Funcionario.selecFuncionario(q);
    console.log('Funcionários retornados:', rows);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar funcionários' });
  }
});


router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const novoId = await Funcionario.criarfuncionario(nome, email, senha);
    res.status(201).json({ id: novoId, nome, senha, email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao adicionar funcionário' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Funcionario.excluirFuncionario(id);
    res.json({ mensagem: 'Funcionário excluído com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao excluir funcionário' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Funcionario.alterarfuncionario(nome, id);
    res.json({ mensagem: 'Funcionário alterado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao alterar funcionário' });
  }
})


module.exports = router;