const Funcionarios = require('./Model/Funcionario');
const Epi = require('./Model/Epi')

async function testar() {
  try {
    // Criar novo usuário
    //const novoId = await Funcionarios.criarfuncionario('Francisco Chico','zlll8193@gmaill.com',null);
    //console.log('Usuário criado com ID:', novoId);

    // Listar todos os usuários
    //const usuarios = await Funcionarios.selecFuncionario('');
    //console.log('Lista de usuários:');
    //console.table(usuarios);

    const idEpi = await Epi.criarNomeEpi('Luva')
    console.log('Epi criado com ID: ',idEpi);
  } catch (err) {
    console.error('Erro durante o teste:', err);
  }
}

testar();