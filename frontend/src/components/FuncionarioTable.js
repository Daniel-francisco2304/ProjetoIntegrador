import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FuncionarioTable() {
  const [lista, setLista] = useState([]);
  const [param, setParam] = useState('');

  useEffect(() => {
    carregarFuncionarios('');
  }, []);

  const carregarFuncionarios = (searchParam = '') => {
    const endpoint = searchParam
      ? `http://localhost:3001/funcionarios?q=${param}`
      : 'http://localhost:3001/funcionarios';

    console.log('Buscando em:', endpoint);

    axios.get(endpoint)
      .then(res => setLista(res.data))
      .catch(err => {
        console.error('Erro ao buscar funcionários:', err);
        setLista([]);
      });
  };

  const excluirFuncionario = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este funcionário?')) {
      axios.delete(`http://localhost:3001/funcionarios/${id}`)
        .then(() => {
          alert('Funcionário excluído com sucesso!');
          carregarFuncionarios(param); // manter o filtro atual
        })
        .catch(err => {
          console.error('Erro ao excluir funcionário:', err);
          alert('Erro ao excluir funcionário!');
        });
    }
  };

  const editarFuncionario = (id) => {
    alert(`Editar funcionário com ID ${id}`);
  };

  return (
    <div>
      <h2>Funcionários</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        carregarFuncionarios(param);
        console.log('FORM FOI ENVIADO ');
        console.log('Formulário enviado, param:', param);
      }}>
        <input
          value={param}
          onChange={(e) => setParam(e.target.value)}
          placeholder="Buscar por nome ou email"
        />
        <button type='submit'>Buscar</button>
      </form>

      <table border="1" cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
 <tbody>
  {Array.isArray(lista) && lista.length > 0 ? (
    lista.map((func, i) => (
      <tr key={i}>
        <td>{func.id}</td>
        <td>{func.nome}</td>
        <td>
          <button onClick={() => editarFuncionario(func.id)}>Editar</button>{' '}
          <button onClick={() => excluirFuncionario(func.id)}>Excluir</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3">Nenhum funcionário encontrado ou erro ao buscar</td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
}

export default FuncionarioTable;
