import React, { useEffect, useState } from 'react';
import MyContainer from '../components/MyContainer'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton';
import { BsSearch, BsPersonFillAdd } from "react-icons/bs";
import { MyCanva } from '../components/MyCanvas';
import MyText from "../components/MyText";
import { getAllFuncionarios } from '../model/funcionario';
import { MySelect } from '../components/MySelect';

function Funcionarios() {
  const [nome, setNome] = useState('');
  const [filter, setFilter] = useState('Nome');
  useEffect(() => { getAllFuncionarios(nome, filter) }, [nome, filter])
  return (
    <div style={styles.container}>
      <MyCanva />
      <h3>Funcionários</h3>
      <MyContainer size='lg' variant='success'>
        <text style={{ fontSize: 20 }}>Buscar Funcionário</text><br />

        <MyInput
          style={{ width: '100%' }}
          onChange={(e) => { setNome(e.target.value) }}
        /> <br />
        <MyButton size='md' onClick={() => { getAllFuncionarios(nome, filter) }} style={{ marginLeft: '0' }} title={<><BsSearch /> Consultar</>}>
          Consultar
        </MyButton>
        <MyButton size='md' title={<><BsPersonFillAdd /> Novo Funcionário</>} />
        <MyText>Filtrar por:</MyText>
        <MySelect
          defaltValue='Nome'
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value={'Nome'}>Nome</option>
          <option value={'Email'}>Email</option>
          <option value={'dtContratacao'}>Data de Contratação</option>
        </MySelect>
      </MyContainer>
      <MyContainer variant='light' size='lg'>
        <button></button>
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
