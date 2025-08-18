// src/pages/Funcionarios.js
import React, { useState } from 'react';
import OffCanvas from '../components/offcanvas';
import OffCanvasRight from '../components/OffCanvasRight';
import Navbar from '../components/navbar';
import MyContainer from '../components/MyContainer'
import MyInput from '../components/MyInput'
import ViewFuncionario from '../components/ViewFuncionarios';
import { IoSearchOutline } from "react-icons/io5";
import MyButton from '../components/MyButton';

function Funcionarios() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const toggleNotif = () => setIsNotifOpen(!isNotifOpen);
  const [nome, setNome] = useState('')
  return (
    <div style={styles.container}>
      <div>
        <Navbar
          toggleMenu={toggleMenu}
          toggleNotif={toggleNotif}
        />
        <OffCanvas
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
        />
        <OffCanvasRight
          isOpen={isNotifOpen}
          toggleNotif={toggleNotif}
        />
      </div><br /><br /><br /><br />
      <MyContainer size='lg' variant='success'>
        <MyInput size='md' />
        <MyButton size='md' title='aaaaaa'>
          <IoSearchOutline />
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
