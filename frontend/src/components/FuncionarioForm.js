// src/components/FuncionarioForm.js
import React, { useState } from 'react';
import axios from 'axios';

function FuncionarioForm({ onAdd }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/funcionarios', { nome, email, senha });
      setNome('');
      setSenha('');
      setEmail('');
      if (onAdd) onAdd(); // recarrega a tabela depois de adicionar
    } catch (err) {
      console.error('Erro ao adicionar funcionário:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do funcionário"
        required
      />
      <input
        value={email}
        onChange={(a) => setEmail(a.target.value)}
        placeholder="Email do funcionário"
        required
      /><input
        value={senha}
        onChange={(x) => setSenha(x.target.value)}
        placeholder="Senha do funcionário"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FuncionarioForm;
