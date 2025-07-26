// src/pages/Funcionarios.js
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FuncionarioForm from '../components/FuncionarioForm';
import FuncionarioTable from '../components/FuncionarioTable';
import OffCanvas from '../components/offcanvas';
import OffCanvasRight from '../components/OffCanvasRight';
import Navbar from '../components/navbar';

function Funcionarios() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const toggleNotif = () => setIsNotifOpen(!isNotifOpen);
  return (
    <div style={styles.container}>
      <div>
        <Navbar
          toggleMenu={toggleMenu}
          toggleNotif={toggleNotif}
        />
        <OffCanvas
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
        <OffCanvasRight
          isOpen={isNotifOpen}
          toggleNotif={toggleNotif}
        />

      </div>
      <div style={styles.title}>
        <Routes>
          <Route path="cadastrar" element={<FuncionarioForm />} style={styles.button} />
          <Route path="listar" element={<FuncionarioTable />} style={styles.button} />
          <Route path="/" element={<div>Bem-vindo ao módulo de funcionários!</div>} />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '8px',
    minWidth: '200px',
  },
};

export default Funcionarios;
