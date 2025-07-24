// src/pages/Home.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/MyButton';
import OffCanvas from '../components/offcanvas';
import Navbar from '../components/navbar';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div style={styles.container}>
            <OffCanvas />    <div>
                <Navbar toggleMenu={toggleMenu} />
                <OffCanvas isOpen={menuOpen} toggleMenu={toggleMenu} />
                <div style={{ paddingTop: '70px', textAlign: 'center' }}>
                    <h2>Bem-vindo à Home!</h2>
                    <p>Use o menu lateral para navegar.</p>
                </div>
            </div>
            <h1 style={styles.title}>Sistema SGST</h1>
            <div style={styles.menu}>
                <Link to="/funcionarios" style={styles.button}>Funcionários</Link>
                <MyButton title="á" />
                <button style={styles.button} onClick={() => alert('Funcionalidade ainda não implementada')}>Produtos</button>
                <button style={styles.button} onClick={() => alert('Deslogado com sucesso!')}>Sair</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '10%',
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

export default Home;
