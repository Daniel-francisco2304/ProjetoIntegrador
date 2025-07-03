import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FuncionarioTable() {
  const [lista, setLista] = useState([]);

  // Carregar lista
  useEffect(() => {
    carregarFuncionarios();
  }, []);

  const carregarFuncionarios = () => {
    axios.get('http://localhost:3001/funcionarios')
      .then(res => {
        setLista(res.data);
      })
      .catch(err => {
        console.error('Erro ao buscar funcionários:', err);
      });
  };

  const excluirFuncionario = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este funcionário?')) {
      axios.delete(`http://localhost:3001/funcionarios/${id}`)
        .then(() => {
          alert('Funcionário excluído com sucesso!');
          carregarFuncionarios(); // atualiza a tabela
        })
        .catch(err => {
          console.error('Erro ao excluir funcionário:', err);
          alert('Erro ao excluir funcionário!');
        });
    }
  };

  const editarFuncionario = (id) => {
    // aqui você pode usar React Router pra navegar, ex:
    // navigate(`/editar-funcionario/${id}`);
    alert(`Editar funcionário com ID ${id}`);
  };

  return (
    <div>
      <h2>Funcionários</h2>
      <table border="1" cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {lista.map(func => (
            <tr key={func.id}>
              <td>{func.id}</td>
              <td>{func.nome}</td>
              <td>
                <button onClick={() => editarFuncionario(func.id)}>Editar</button>{' '}
                <button onClick={() => excluirFuncionario(func.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FuncionarioTable;
