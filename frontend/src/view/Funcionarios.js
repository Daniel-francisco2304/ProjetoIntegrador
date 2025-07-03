// src/pages/Funcionarios.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FuncionarioForm from '../components/FuncionarioForm';
import FuncionarioTable from '../components/FuncionarioTable';

function Funcionarios() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gestão de Funcionários</h1>

      <nav style={styles.nav}>
        <Link to="/funcionarios/cadastrar" style={styles.link}>Cadastrar Funcionário</Link>
        <Link to="/funcionarios/listar" style={styles.link}>Listar Funcionários</Link>
      </nav>

      <Routes>
        <Route path="cadastrar" element={<FuncionarioForm />} />
        <Route path="listar" element={<FuncionarioTable />} />
        <Route path="/" element={<div>Bem-vindo ao módulo de funcionários!</div>} />
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#007BFF',
    padding: '10px 20px',
    borderRadius: '5px'
  }
};

export default Funcionarios;
