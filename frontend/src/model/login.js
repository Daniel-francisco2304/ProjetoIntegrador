import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebaseCloud';

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