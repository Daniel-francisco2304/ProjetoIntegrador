const express = require('express');
const router = express.Router();
const Acidente = require('../Model/Acidente');

router.get('/', async (req, res) => {
  try {
    //const rows = await .selecCargo();
    //console.log('Filial retornados:', rows);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar cargos' });
  }
});

router.post('/', async (req, res) => {
  const { nome } = req.body;
  //console.log(req.body)
  try {
    const novoId = await Cargo.criarCargo(nome);
    res.status(201).json({ id: novoId, nome });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao adicionar o cargo' });
  }
});

module.exports = router;