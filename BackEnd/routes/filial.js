const express = require('express');
const router = express.Router();
const Filial = require('../Model/Filial');

router.get('/', async (req, res) => {
  try {
    const rows = await Filial.selecFilial();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar Empresas parceiras' });
  }
});


//router.post('/', async (req, res) => {});
//
//router.delete('/:id', async (req, res) => {});
//
//router.put('/:id', async (req, res) => {})


module.exports = router;