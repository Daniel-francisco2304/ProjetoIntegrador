import axios from "axios";

export async function getAllFuncionarios(p,f){
    try {
        const funcionarios = await axios.get(`http://localhost:3001/funcionarios?q=${p}&f=${f}`);
        console.log(funcionarios);
        //return funcionarios;
    } catch (error) {
        alert('error ao buscar funcionários!',error);
        return [false];
    }
}