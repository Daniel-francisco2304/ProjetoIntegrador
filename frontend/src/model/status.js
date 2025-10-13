import axios from "axios";
export async function getAllStatus() {
    try {
        const filiais = await axios.get(`http://localhost:3001/status`);
        //console.log(filiais)
        return filiais.data;
    } catch (error) {
        alert('err',error)
    }
}