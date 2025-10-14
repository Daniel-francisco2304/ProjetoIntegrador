import React, { useEffect, useState } from "react";
import { BsFloppy } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { postFuncionario, putFuncionario } from "../../model/funcionario";
import { CampoTexto, CampoSelect, CampoArea } from "./campos";

import MyButton from "../MyButton";
import { getAllCargo } from "../../model/cargo";
import { getAllFilial } from "../../model/filial";
import { getAllStatus } from "../../model/status";

export default function FuncionarioForm({ func, onClose }) {
    const [dados, setDados] = useState({
        nome: func?.f_nome || "",
        cpf: func?.cpf || "",
        email: func?.email || "",
        dtContratacao: func?.contratacao || "",
        contato1: func?.contato1 || "",
        contato2: func?.contato2 || "",
        emergencia: func?.emergencia || "",
        status: func?.status || "",
        alergia: func?.alergia || "",
    });

    const [listas, setListas] = useState({ cargos: [], filiais: [], status: [] });

    useEffect(() => {
        Promise.all([getAllCargo(), getAllFilial(), getAllStatus()])
            .then(([cargos, filiais, status]) => setListas({ cargos, filiais, status }))
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!func) await postFuncionario(dados);
        else await putFuncionario(func.Registro, dados);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <CampoTexto label="Nome" name="nome" value={dados.nome} onChange={handleChange} />
            <CampoTexto label="CPF" name="cpf" value={dados.cpf} onChange={handleChange} />
            <CampoTexto label="Email" name="email" value={dados.email} onChange={handleChange} />
            <CampoSelect label="Cargo" name="cargo" options={listas.cargos} onChange={handleChange} />
            <CampoSelect label="Filial" name="filial" options={listas.filiais} onChange={handleChange} />
            <CampoArea label="Alergias" name="alergia" value={dados.alergia} onChange={handleChange} />

            <div className="flex justify-end gap-4 mt-4">
                <MyButton variant="warning" title={<><BsFloppy /> Salvar</>} type="submit" />
                <MyButton variant="danger" title={<><RxCross1 /> Cancelar</>} onClick={onClose} />
            </div>
        </form>
    );
}
