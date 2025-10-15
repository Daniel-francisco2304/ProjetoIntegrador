const express = require('express');
const router = express.Router();
const Sangue = require('../Model/Sangue');

router.get('/', async (req, res) => {
  try {
    const rows = await Sangue.selecSangue();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar cargos' });
  }
});

module.exports = router;