import React from 'react';
import { Link } from 'react-router-dom';

const OffCanvas = ({ isOpen, toggleMenu }) => {
    return (
        <div style={{
            ...styles.offcanvas,
            transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
        }}>
            <button onClick={toggleMenu} style={styles.closeButton}>×</button>
            <div style={styles.menuContent}>
                <nav style={styles.nav}>
                    <Link to="" style={styles.link} onClick={toggleMenu}><i class="bi bi-house-fill"></i> Home</Link>
                    <Link to="" style={styles.link} onClick={toggleMenu}><i class="bi bi-person-lines-fill"></i> Funcionários</Link>
                    <Link to="" style={styles.link} onClick={toggleMenu}><i class="bi bi-headset-vr"></i> Produtos</Link>
                </nav>
                <div style={styles.out}>
                    <Link to="" style={styles.link} onClick={toggleMenu}><i class="bi bi-box-arrow-right"></i> Sair </Link>
                </div>
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
        transition: 'transform 0.2s ease-in-out',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
    },
    closeButton: {
        fontSize: '1.5rem',
        background: 'none',
        border: 'none',
        color: 'white',
        position: 'absolute',
        top: 10,
        right: 10,
        cursor: 'pointer',
    },
    menuContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '3rem',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    icon: {
        marginRight: '10px',
        fontSize: '1.2rem',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.0 rem',
    },
    out: {
        marginBottom: '3rem',
    }
};

export default OffCanvas;
