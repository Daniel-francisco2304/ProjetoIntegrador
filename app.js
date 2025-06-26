const express = require('express');
const app = express();
const userRoutes = require('./routes/Usuario.Routes');

app.use(express.json());
app.use('/api', userRoutes); // endpoint base: /api/usuarios

module.exports = app;
