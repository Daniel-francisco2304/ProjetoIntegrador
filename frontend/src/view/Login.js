// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebaseCloud';
import { signInWithEmailAndPassword } from 'firebase/auth';
import MyButton from '../components/MyButton';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function login(email, senha) {
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigate('/Home')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2>Login</h2>
                <label>Email</label><br />
                <input
                    placeholder='Digite seu Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <label>Senha</label><br />
                <input
                    type="password"
                    placeholder='Digite sua Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                /><br /><br />

                <MyButton title='Acessar' onClick={() => login(email, senha)} />
            </div>
        </div>
    );
}

const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // ocupa a tela inteira
        backgroundColor: '#f7f7f7'
    },
    container: {
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px #ccc',
        backgroundColor: '#fff'
    }
};

export default Login;
