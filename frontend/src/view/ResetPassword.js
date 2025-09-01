// src/pages/Login.js
import React, { useState } from "react";
import { resetPassword } from "../model/login.js";
import { useNavigate } from "react-router-dom";

import BackgroundSlideshow from "../components/background.js";
import MyInput from "../components/MyInput.js";
import MyButton from "../components/MyButton.js";
import MyText from "../components/MyText.js";

function ResetScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  async function handleReset() {
    if (await resetPassword(email)) navigate("/")
  }

  return (
    <BackgroundSlideshow interval={5000}>
      <div style={styles.container}>
        <h2>Recuperar Senha</h2>
        <label>Email</label>
        <br />
        <MyInput
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <MyButton
          title="Enviar"
          onClick={() => handleReset(email)}
        />
        <br />
        <MyText link="default" onClick={()=>{navigate("/")}}> _Voltar para login_ </MyText>
      </div>
    </BackgroundSlideshow>
  );
}

export default ResetScreen;

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