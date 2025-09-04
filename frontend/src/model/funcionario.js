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
        const funcionarios = false
        return funcionarios;
    }
}