const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
const rotaFuncionarios = require('./routes/funcionarios');
app.use('/funcionarios', rotaFuncionarios);

const loginRouter = require('./routes/Login');
app.use('/login', loginRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
