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

export async function postFuncionario(nome, cpf, email, dtContratacao, contato1, contato2, cargo, filial, emergencia, status, alergia, sangue, id) {
    try {
        if (!nome || !cpf || !email || !contato1 || !alergia) {
            console.log({ nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia });
            alert("Campos obrigatórios faltando!");
            return false;
        }

        // Não precisa do JSON.stringify aqui — axios aceita objeto direto
        const body = {
            nome,
            cpf,
            email,
            dtContratacao: dtContratacao || null, // manda null se vazio
            contato1,
            contato2,
            cargo,
            filial,
            emergencia,
            status,
            alergia,
            sangue
        };

        console.log('Enviando:', body);

        await axios.post(`http://localhost:3001/funcionarios`, body);
        alert('Salvo com sucesso');
        return true;
    } catch (error) {
        console.error('Erro ao salvar funcionário:', error);
        // exiba mensagem amigável; se quiser, mostre error.response.data
        alert('Erro ao salvar!');
        return false;
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