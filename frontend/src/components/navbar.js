import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleMenu }) => {
    return (
        <header style={styles.navbar}>
            <button style={styles.menuButton} onClick={toggleMenu}>
                ☰
            </button>
            <h1 style={styles.title}><Link to="" style={styles.link}> SGTST</Link></h1>
            <Link style={styles.link}><i class="bi bi-bell-fill"></i></Link>
        </header>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#65a765',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        color: 'white',
        zIndex: 1000,
    },
    menuButton: {
        fontSize: '1.5rem',
        background: 'none',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        marginRight: '1rem',
    },
    icon: {
        marginRight: '10px',
        fontSize: '1.2rem',
    },
    title: {
        margin: 0,
        fontSize: '1.2rem',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
};

export default Navbar;
