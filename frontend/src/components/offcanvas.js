// src/components/OffCanvas.js
import React from 'react';
import { Link } from 'react-router-dom';

const OffCanvas = ({ isOpen, toggleMenu }) => {
  return (
    <div
      style={{
        ...styles.offcanvas,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <button onClick={toggleMenu} style={styles.closeButton}></button>

      <div style={styles.menuWrapper}>
        <nav style={styles.nav}>
          <Link to="/Home" style={styles.link} onClick={toggleMenu}>
            <i className="bi bi-house-fill" style={styles.icon}></i> Home
          </Link>
          <Link to="/funcionarios" style={styles.link} onClick={toggleMenu}>
            <i className="bi bi-person-lines-fill" style={styles.icon}></i> Funcionários
          </Link>
          <Link to="" style={styles.link} onClick={toggleMenu}>
            <i className="bi bi-headset-vr" style={styles.icon}></i> Produtos
          </Link>
        </nav>

        <Link to="/" style={styles.logoutLink} onClick={toggleMenu}>
          <i className="bi bi-box-arrow-right" style={styles.icon}></i> Sair
        </Link>
      </div>
    </div>
  );
};

const styles = {
  offcanvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '250px',
    backgroundColor: '#65a765',
    color: 'white',
    padding: '1rem',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
  },
  closeButton: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    color: 'white',
    position: 'absolute',
    top: 10,
    right: 15,
    cursor: 'pointer',
    lineHeight: 1,
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,           // Ocupa todo o espaço vertical
    justifyContent: 'center', // Centraliza nav verticalmente
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'left',
  },
  logoutLink: {
    marginTop: 'auto', // Empurra o logout para a base
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem',
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.2rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
  },
};

export default OffCanvas;
