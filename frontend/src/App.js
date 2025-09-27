// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Funcionarios from './view/Funcionarios';
import Home from './view/Home';
import Login from './view/Login';
import ResetScreen from './view/ResetPassword';
import EpiScreen from './view/Epi';
import Fornecedor from './view/Fornecedor';
import Filial from './view/Filial';
import Acidente from './view/Acidante';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Acidente" element={<Acidente />} />
        <Route path="/Epi" element={<EpiScreen />} />
        <Route path="/Fornecedor" element={<Fornecedor />} />
        <Route path="/Filial" element={<Filial />} />
        <Route path="/ResetPassword" element={<ResetScreen />} />
        <Route path="/funcionarios/*" element={<Funcionarios />} />
      </Routes>
    </Router>
  );
}

export default App;