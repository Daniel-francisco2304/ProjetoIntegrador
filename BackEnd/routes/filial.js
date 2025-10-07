const express = require('express');
const router = express.Router();
const Filial = require('../Model/Filial');

router.get('/', async (req, res) => {
  //const { q, f } = req.query;
  //console.log('Recebido f:', f)
  //console.log('Recebido q:', q)

  try {
    const rows = await Filial.selecFilial();
    //console.log('Filial retornados:', rows);
    res.json(rows);
  } catch (err) {
    //console.error(err);
    res.status(500).json({ erro: 'Erro ao buscar Empresas parceiras' });
  }
});


//router.post('/', async (req, res) => {});
//
//router.delete('/:id', async (req, res) => {});
//
//router.put('/:id', async (req, res) => {})


module.exports = router;