import axios from "axios";
export async function getAllStatus() {
    try {
        const filiais = await axios.get(`http://localhost:3001/status`);
        //console.log(filiais)
        return filiais.data;
    } catch (error) {
        alert('err', error)
    }
}

export async function getAllSangue() {
    try {
        const sangue = await axios.get(`http://localhost:3001/sangue`);
        //console.log(filiais)
        return sangue.data;
    } catch (error) {
        alert('err', error)
    }
}