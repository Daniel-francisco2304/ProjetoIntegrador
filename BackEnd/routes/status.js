const express = require('express');
const router = express.Router();
const Status = require('../Model/status');

router.get('/', async (req, res) => {
    try {
        const rows = await Status.selecStatus();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar Status' });
    }
});

module.exports = router;