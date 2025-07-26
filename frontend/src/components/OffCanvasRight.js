// src/components/OffCanvasRight.js
import React from 'react';

const OffCanvasRight = ({ isOpen, toggleNotif }) => {
  return (
    <div style={{
      ...styles.panel,
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
    }}>
      <button style={styles.close} onClick={toggleNotif}>×</button>
      <h3 style={styles.title}>Notificações</h3>
      <ul style={styles.list}>
        <li>🔔 Backup diário concluído com sucesso.</li>
        <li>📦 Novo produto cadastrado.</li>
        <li>⚠️ Funcionário X está com documentação pendente.</li>
      </ul>
    </div>
  );
};

const styles = {
  panel: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px',
    height: '100vh',
    backgroundColor: '#e6ffe6',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
    padding: '3rem 1rem',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 999,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  title: {
    marginTop: '2rem',
    fontSize: '1.3rem',
    borderBottom: '1px solid #ccc',
    paddingBottom: '0.5rem',
  },
  list: {
    marginTop: '1rem',
    listStyle: 'none',
    padding: 0,
    fontSize: '1rem',
  },
};

export default OffCanvasRight;
