const express = require('express');
const router = express.Router();
const Funcionario = require('../Model/Funcionario');

router.get('/', async (req, res) => {
  const { q, f } = req.query;
  console.log('Recebido f:', f)
  console.log('Recebido q:', q)

  try {
    const rows = await Funcionario.selecFuncionario(q, f);
    console.log('Funcionários retornados:', rows);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar funcionários' });
  }
});


router.post('/', async (req, res) => {
  const { nome, cpf, email, contato1, contato2, emergencia, status, alergia } = req.body;
  try {
    const novoId = await Funcionario.criarfuncionario(nome, cpf, email, contato1, contato2, emergencia, status, alergia);
    res.status(201).json({ id: novoId, nome, cpf, email, contato1, contato2, emergencia, status, alergia });
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