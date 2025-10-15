import axios from "axios";
export async function getAllFilial() {
    try {
        const filiais = await axios.get(`http://localhost:3001/filial`);
        //console.log(filiais)
        return filiais.data;
    } catch (error) {
        alert('err',error)
    }
}

