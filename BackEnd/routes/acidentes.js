const express = require('express');
const router = express.Router();
const Acidente = require('../Model/Acidente');

router.get('/', async (req, res) => {
  const { q, f } = req.query;
  try {
    const rows = await Acidente.selecAcidente(q, f);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar Acidentes' });
  }
});

module.exports = router;