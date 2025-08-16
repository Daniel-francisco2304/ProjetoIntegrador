// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { Login } from "../model/login";
import BackgroundSlideshow from "../components/background.js";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(email, senha) {
    if (Login(email, senha)) navigate("/Home");
  }

  return (
    <BackgroundSlideshow interval={5000}>
      <div style={styles.container}>
        <h2>Login</h2>
        <label>Email</label>
        <br />
        <MyInput
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Senha</label>
        <br />
        <MyInput
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <br />

        <MyButton
          title="Acessar"
          onClick={() => handleLogin(email, senha)}
        />
      </div>
    </BackgroundSlideshow>
  );
}

export default LoginScreen;

const styles = {
  container: {
    maxWidth: "400px",
    width: "100%",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    backgroundColor: "white",
  },
};