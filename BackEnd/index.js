//const Funcionarios = require('./Model/Funcionario');
//const Epi = require('./Model/Epi')
const Filial = require('./Model/Filial')
async function testar() {
  try {
    // Criar novo usuário
    //const novoId = await Funcionarios.criarfuncionario('Francisco Jô Soares','12345678941','zllll8193@gmaill.com',null,'12345678910','00000000000','00000000000',1,"água e nazista");
    //console.log('Usuário criado com ID:', novoId);

    // Listar todos os usuários
    //const usuarios = await Funcionarios.selecFuncionario('','dt_contratacao');
    //console.log('Lista de usuários:');
    //console.log(usuarios);

    //const p = await Filial.selecFilial();
    //console.log(p)

    //const idEpi = await Epi.criarNomeEpi('Luva')
    //console.log('Epi criado com ID: ',idEpi);

    //const idLote = await Epi.criarLoteEpi('Óculos','Vanessa da Mata SA','2005-04-23 6:32:52','2005-04-23 6:32:52',5,1);
    //console.log(idLote);
  } catch (err) {
    console.error('Erro durante o teste:', err);
  }
}

testar();