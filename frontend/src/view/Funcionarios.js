// src/pages/Funcionarios.js
import React, { useState } from 'react';
import OffCanvasRight from '../components/OffCanvasRight';
import MyContainer from '../components/MyContainer'
import MyInput from '../components/MyInput'
import ViewFuncionario from '../components/ViewFuncionarios';
import { IoSearchOutline } from "react-icons/io5";
import MyButton from '../components/MyButton';
import { MyCanva } from '../components/MyCanvas';

function Funcionarios() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const toggleNotif = () => setIsNotifOpen(!isNotifOpen);
  const [nome, setNome] = useState('')
  return (
    <div style={styles.container}>
      <MyCanva />
      
      <MyContainer size='lg' variant='success'>
        <MyInput size='md' />
        <MyButton size='md'>
          <IoSearchOutline size={30} color="white" />
        </MyButton>
      </MyContainer>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Funcionarios;
