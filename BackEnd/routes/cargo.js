const express = require('express');
const router = express.Router();
const Cargo = require('../Model/cargo');

router.get('/', async (req, res) => {
  try {
    const rows = await Cargo.selecCargo();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar cargos' });
  }
});

router.post('/', async (req, res) => {
  const { nome } = req.body;
  try {
    const novoId = await Cargo.criarCargo(nome);
    res.status(201).json({ id: novoId, nome });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao adicionar o cargo' });
  }
});

module.exports = router;