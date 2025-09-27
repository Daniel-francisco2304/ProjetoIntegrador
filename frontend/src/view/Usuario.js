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

function Usuario() {
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
    <div>
      <MyCanva></MyCanva>
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

export default Usuario;
