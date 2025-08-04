import React, { useState, useEffect } from "react";
import Modal from "./modal";
import axios from "axios";

const ViewFuncionario = () => {
    const [funcionarios, setFuncionarios] = useState([]);
    const [nome, setNome] = useState('')
    const [isModalOpen, setModalOpen] = useState(false);

    async function getUser() {
        try {
            const res = await axios.get("http://localhost:3001/funcionarios");
            setFuncionarios(res.data);
            //console.log(res.data); // aqui sim
        } catch (error) {
            console.error("Erro ao buscar funcionários:", error);
        }
    }
    //console.log(nome)
    useEffect(() => {
        getUser();
    }, [nome]);

    return (
        <div style={{ padding: "1rem" }}>
            <button onClick={getUser}>Atualizar</button>
            <button onClick={() => setModalOpen(true)}>Abrir Modal</button>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Olá, mundo!</h2>
                <p>Esse é um modal simples feito com React.</p>
            </Modal>
            <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite nome ou email..."
            ></input>
            <div style={{ marginTop: "1rem", border: "1px solid #ccc", maxHeight: "300px", overflowY: "auto" }}>
                {funcionarios.length === 0 ? (
                    <p>Nenhum funcionário encontrado.</p>
                ) : (
                    funcionarios.map((func, index) => (
                        <div key={func.id || index} style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                            <strong>{func.f_nome} </strong>
                            <span>{func.email}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ViewFuncionario;
