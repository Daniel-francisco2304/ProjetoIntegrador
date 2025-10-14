import axios from "axios";

export async function getAllFuncionarios(p, f) {
    try {
        switch (f) {
            case '1': f = 'f.nome'; break;
            case '2': f = 'email'; break;
            case '3': f = 'contratacao'; break;
            default: f = 'f.nome';
        }
        const funcionarios = await axios.get(`http://localhost:3001/funcionarios?q=${p}&f=${f}`);
        console.log(funcionarios);
        return funcionarios.data;
    } catch (error) {
        alert('error ao buscar funcionários!', error);
        return;
    }
}

export async function postFuncionario(nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia, id) {
    try {
        if (!nome || !cpf || !email || !dtContratacao || !contato1 || !contato2 || !emergencia || !status || !alergia) {
            console.log(nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia);
            alert("Campos vazios!");
            return;
        }
        const data = JSON.stringify(id, nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia);
        console.log(data);
        //alert(data);
        await axios.post(`http://localhost:3001/funcionarios`, {
            nome: nome,
            cpf: cpf,
            email: email,
            dtContratacao: dtContratacao,
            contato1: contato1,
            contato2: contato2,
            emergencia: emergencia,
            status: status,
            alergia: alergia
        });
        alert('Salvo com sucesso');
        return;
    } catch (error) {
        alert('Error ao salvar!', error);
        return;
    }
}

export async function putFuncionario(id, nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia) {
    const funcionario = JSON.stringify(id, nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia);
    alert(funcionario);
} 
export async function deleteFuncionario(id) {
    if (!id) {
        alert('Usuário não encontrado');
        return;
    }
    try {
        axios.delete(`http://localhost:3001/funcionarios/${id}`);
        alert("Funcionário excluido com sucesso!");
        return;
    } catch (error) {
        alert("Error ao excluir funcionário!");
        return;
    }
}