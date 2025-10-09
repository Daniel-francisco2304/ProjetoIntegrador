import axios from "axios";

export async function getAllCargo() {
    try {
        const cargo = await axios.get(`http://localhost:3001/cargo`);
        console.log(cargo)
        return cargo.data;
    } catch (error) {
        alert('err', error)
    }
}

export async function postCargo(nome) {
    //let nome = p.trim;
    //if (nome === '') {
    //    alert('campo vazio');
    //    return;
    //}
    try {
        const cargo = await axios.post(`http://localhost:3001/cargo`, {
            nome: nome
        })
        console.log(cargo);
        return cargo;
    } catch (error) {
        alert('err', error);
    }
}