import axios from "axios";
import api from "../services/api";

export async function getAllFuncionarios(p,f){
    try {
        await axios.get(api+'/funcionarios?')
        return true;
    } catch (error) {
        alert('error ao buscar funcionários!',error);
        return [false];
    }
}