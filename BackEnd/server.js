const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
const rotaFuncionarios = require('./routes/funcionarios');
app.use('/funcionarios', rotaFuncionarios);

const rotaFilial = require('./routes/filial');
app.use('/filial', rotaFilial);

const rotaCargos = require('./routes/cargo');
app.use('/cargo',rotaCargos);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
