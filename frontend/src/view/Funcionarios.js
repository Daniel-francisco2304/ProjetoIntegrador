import React, { useState } from 'react';
import MyContainer from '../components/MyContainer'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton';
import { BsSearch, BsPlus } from "react-icons/bs";
import { MyCanva } from '../components/MyCanvas';

function Funcionarios() {
  const [nome, setNome] = useState('')
  return (
    <div style={styles.container}>
      <MyCanva />

      <MyContainer size='lg' variant='success'>
        <MyInput size='md' />
        <MyButton size='md' title={<BsSearch />}>
          Consultar
        </MyButton>
        <MyButton size='md' title={<BsPlus/>}>
          Consultar
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
