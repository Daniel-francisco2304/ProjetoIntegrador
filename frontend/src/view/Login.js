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
            //console.log('Logado');
            navigate('/Home')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <text>
                Email
            </text><br />

            <input
                placeholder='Digite seu Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />

            <text>
                Senha
            </text><br />

            <input
                placeholder='Digite sua Senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            /><br /><br />
            <MyButton title='Acessar'/>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px #ccc'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    input: {
        padding: '10px',
        fontSize: '16px'
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px'
    }
};

export default Login;
