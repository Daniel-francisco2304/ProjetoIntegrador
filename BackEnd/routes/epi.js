const express = require('express');
const router = express.Router();
const Epi = require('../Model/Epi');

router.get('/', async (req, res) => {
  const { q, f } = req.query;
  try {
    const rows = await Epi.selecEpi(q, f);
    //console.log('Funcionários retornados:', rows);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar os EPIs' });
  }
});

module.exports = router;