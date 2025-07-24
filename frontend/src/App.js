// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Funcionarios from './view/Funcionarios';
import Home from './view/Home';
import Login from './view/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/funcionarios/*" element={<Funcionarios />} />
      </Routes>
    </Router>
  );
}

export default App;