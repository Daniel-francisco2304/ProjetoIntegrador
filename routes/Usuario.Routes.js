const express = require('express');
const router = express.Router();
const UserController = require('../controller/Controller');

router.get('/Usuarios', UserController.listarUsuarios);

module.exports = router;