import React, { useState } from 'react';
import MyContainer from '../components/MyContainer'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton';
import { BsSearch, BsPlus, BsPersonFillAdd } from "react-icons/bs";
import { MyCanva } from '../components/MyCanvas';
import MyText from "../components/MyText";
import { getAllFuncionarios } from '../model/funcionario';

function Funcionarios() {
  const [nome, setNome] = useState('')
  return (
    <div style={styles.container}>
      <MyCanva />
      <h3>Funcionários</h3>
      <MyContainer size='lg' variant='success'>
        <text style={{ fontSize: 20 }}>Buscar Funcionário</text><br />
        <MyInput style={{width:'100%'}} /> <br/>
        <MyButton size='md' style={{marginLeft:'0'}} title={<><BsSearch /> Consultar</>}>
          Consultar
        </MyButton>
        <MyButton size='md' title={<><BsPersonFillAdd /> <MyText size=''>Novo Funcionário</MyText></>} />
      </MyContainer>
      <MyContainer variant='light' size='lg'>
        <button onClick={()=>{getAllFuncionarios('@v','')}}></button>
      </MyContainer>
    </div >
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
