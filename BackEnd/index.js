const Funcionarios = require('./Model/Funcionario');

async function testar() {
  try {
    // Criar novo usuário
    const novoId = await Funcionarios.criarfuncionario('Francisco');
    console.log('Usuário criado com ID:', novoId);

    // Listar todos os usuários
    const usuarios = await Funcionarios.listarTodos();
    console.log('Lista de usuários:');
    console.table(usuarios);
  } catch (err) {
    console.error('Erro durante o teste:', err);
  }
}

testar();