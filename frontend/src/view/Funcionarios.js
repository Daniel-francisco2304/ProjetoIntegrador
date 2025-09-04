import React, { useEffect, useState } from 'react';
import MyContainer from '../components/MyContainer'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton';
import { BsSearch, BsPersonFillAdd, BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { MyCanva } from '../components/MyCanvas';
import MyText from "../components/MyText";
import { getAllFuncionarios } from '../model/funcionario';
import { MySelect } from '../components/MySelect';

function Funcionarios() {
  const [nome, setNome] = useState('');
  const [filter, setFilter] = useState('Nome');
  const [funcionarios, setFuncionarios] = useState([]);

  async function getAll(nome, filter) {
    setFuncionarios(await getAllFuncionarios(nome, filter))
  }

  useEffect(() => { setFuncionarios(getAll(nome, filter)) }, [nome, filter])
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
        <MyButton size='md' onClick={() => { getAll(nome, filter) }} style={{ marginLeft: '0' }} title={<><BsSearch /> Consultar</>} />
        <MyButton size='md' onClick={() => { }} title={<><BsPersonFillAdd /> Novo Funcionário</>} />
        <MyText>Filtrar por:</MyText>
        <MySelect
          defaltValue='Nome'
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value={'1'}>Nome</option>
          <option value={'2'}>Email</option>
          <option >Data de Contratação</option>
          <option >Cargo</option>
        </MySelect>
      </MyContainer>
      <MyContainer variant='light' size='lg'>
        <table
          border="1"
          cellPadding={1}
          style={{
            width: '100%',
            border: '1px solid #d3d3d3',
            textAlign: 'center',
          }}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data de contratação</th>
              <th>Cargo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(funcionarios) && funcionarios.length > 0 ?
              (
                funcionarios.map((func, i) => (
                  <tr key={i}>

                    <td style={{ textAlign: 'center' }}>{func.f_nome}</td>
                    <td style={{ textAlign: 'center' }}>{func.email}</td>
                    <td style={{ textAlign: 'center' }}>{func.contratacao}</td>
                    <td style={{ textAlign: 'center' }}>{func.c_nome}</td>
                    <td style={{ textAlign: 'center', width: '20%' }}>
                      <MyButton size='sm' variant='warning' title={<><BsPencilSquare /></>} />
                      <MyButton size='sm' variant='danger' title={<><BsFillTrashFill /></>} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}>Nenhum funcionário encontrado ou erro ao buscar</td>
                </tr>
              )
            }
          </tbody>
        </table>
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
