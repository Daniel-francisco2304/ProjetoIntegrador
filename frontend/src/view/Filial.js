import React, { useEffect, useState } from 'react';
import MyContainer from '../components/MyContainer'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton';
import MyText from "../components/MyText";
import { BsSearch, BsPersonFillAdd, BsFillTrashFill, BsInfoCircle } from "react-icons/bs";
import { MyCanva } from '../components/MyCanvas';
import { getAllFuncionarios } from '../model/funcionario';
import { MySelect } from '../components/MySelect';
import { MyModal } from '../components/MyModal';

function Filial() {
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState('');
    const [filter, setFilter] = useState('Nome');
    const [funcionarios, setFuncionarios] = useState([]);
    const [obj, setObj] = useState([])

    async function getAll(nome, filter) {
        setFuncionarios(await getAllFuncionarios(nome, filter))
    }
    //useEffect(() => { setFuncionarios(getAll(nome, filter)) }, [nome, filter])

    return (
        <div style={styles.container}>
            <MyCanva />
            <h3>Filial</h3>
            <MyContainer size='lg' variant='success' style={{ minWidth: 500, }}>
                <text style={{ fontSize: 20 }}>Buscar EPI</text><br />

                <MyInput
                    style={{ width: '100%' }}
                    onChange={(e) => { }}
                /> <br />
                <MyButton size='md' onClick={() => { }} style={{ marginLeft: '0' }} title={<><BsSearch /> Consultar</>} />
                <MyButton size='md' onClick={() => { }} title={<><BsPersonFillAdd /> Novo EPI</>} />
                <MyText>Ordenar por:</MyText>
                <MySelect
                    defaltValue='Nome'
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value={'1'}>Nome</option>
                    <option value={'2'}>Cep</option>
                    <option value={'3'}>Data de Abertura</option>
                </MySelect>
            </MyContainer>
            <MyContainer variant='light' size='lg' style={{ minWidth: 500, }}>
                <table
                    //        border="1"
                    cellPadding={1}
                    style={{
                        width: '100%',  
                        border: '1px solid #d3d3d3',
                        textAlign: 'center',
                    }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #d3d3d3', }}>Nome</th>
                            <th style={{ border: '1px solid #d3d3d3', }}>Email</th>
                            <th style={{ border: '1px solid #d3d3d3', }}>Data de contratação</th>
                            <th style={{ border: '1px solid #d3d3d3', }}>Cargo</th>
                            <th style={{ border: '1px solid #d3d3d3', }}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(funcionarios) && funcionarios.length > 0 ?
                            (
                                funcionarios.map((func, i) => (
                                    <tr key={i} style={{ border: '1px solid #d3d3d3', }}>

                                        <td style={{ textAlign: 'center', border: '1px solid #d3d3d3', }}>{ }</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #d3d3d3', }}>{ }</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #d3d3d3', }}>{ }</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #d3d3d3', }}>{ }</td>
                                        <td style={{ textAlign: 'center', border: '1px solid #d3d3d3', width: '15%' }}>
                                            <MyButton size='sm' variant='warning' value={null} title={<><BsInfoCircle /></>} onClick={() => { }} />
                                            <MyButton size='sm' variant='danger' value={null} title={<><BsFillTrashFill /></>} onClick={() => { }} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center' }}>Nenhum funcionário encontrado ou erro ao buscar</td>
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

export default Filial;
