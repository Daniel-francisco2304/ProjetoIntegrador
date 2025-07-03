// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/Home';
import Funcionarios from './view/Funcionarios';
import Login from './view/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>
    </Router>
  );
}

export default App;

/*import { useEffect, useState } from 'react';
import api from './services/api';
import FuncionarioForm from './components/FuncionarioForm';
import FuncionarioTable from './components/FuncionarioTable';

function App() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  const carregar = async () => {
    const res = await api.get('/funcionarios');
    setFuncionarios(res.data);
  };

  const salvar = async (func) => {
    if (func.id) {
      await api.put(`/funcionarios/${func.id}`, { nome: func.nome });
    } else {
      await api.post('/funcionarios', { nome: func.nome });
    }
    setFuncionarioSelecionado(null);
    carregar();
  };

  const excluir = async (id) => {
    await api.delete(`/funcionarios/${id}`);
    carregar();
  };

  const editar = (func) => {
    setFuncionarioSelecionado(func);
  };

  const cancelar = () => {
    setFuncionarioSelecionado(null);
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Gestão de Funcionários</h1>
      <FuncionarioForm
        salvar={salvar}
        funcionarioSelecionado={funcionarioSelecionado}
        cancelar={cancelar}
      />
      <FuncionarioTable lista={funcionarios} editar={editar} excluir={excluir} />
    </div>
  );
}

export default App;
*/