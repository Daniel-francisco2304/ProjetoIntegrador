// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Sistema SGST</h1>
            <div style={styles.menu}>
                <Link to="/funcionarios" style={styles.button}>Funcionários</Link>
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
