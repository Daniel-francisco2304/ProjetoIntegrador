// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMa4xMPWewcqKEA9C9N42h9i2n0FmhA60",
  authDomain: "sgtst-cloud.firebaseapp.com",
  projectId: "sgtst-cloud",
  storageBucket: "sgtst-cloud.firebasestorage.app",
  messagingSenderId: "108061231507",
  appId: "1:108061231507:web:f8a02a0eefcbf2bd65c066",
  measurementId: "G-1YDPT95GSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);