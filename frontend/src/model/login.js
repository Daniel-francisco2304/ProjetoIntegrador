import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebaseCloud';

export async function controle(email) {

}
export async function Login(email, senha) {
    try {
        await signInWithEmailAndPassword(auth, email, senha)
        return true;
    } catch (error) {
        alert(error);
        console.log(error);
        return false;
    }
}
export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("email de recuperação enviado!")
        return true;
    } catch (error) {
        alert("Erro ao enviar email!");
        console.log(error);
        return false;
    }
}