// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Funcionarios from './view/Funcionarios';
import Home from './view/Home';
import Login from './view/Login';
import ResetScreen from './view/ResetPassword';
import EpiScreen from './view/Epi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Epi" element={<EpiScreen />} />
        <Route path="/ResetPassword" element={<ResetScreen />} />
        <Route path="/funcionarios/*" element={<Funcionarios />} />
      </Routes>
    </Router>
  );
}

export default App;