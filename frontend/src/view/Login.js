// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton'
import { Login } from '../model/login';
function LoginScreen() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin(email, senha) {
        if(Login(email,senha)) navigate('/Home')
    }


    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2>Login</h2>
                <label>Email</label><br />
                <MyInput
                    placeholder='Digite seu Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <label>Senha</label><br />
                <MyInput
                    type="password"
                    placeholder='Digite sua Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                /><br /><br />

                <MyButton title='Acessar' onClick={() => { handleLogin(email, senha) }} />
            </div>
        </div>
    );
}

export default LoginScreen;

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

