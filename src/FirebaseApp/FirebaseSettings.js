// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
 //Autentificacion
// import 'firebase/auth';
//Almacenar datos
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiGWVKGcJFWTa9xLDOYhD8MTg044QQln0",
    authDomain: "webhosting-22e5f.firebaseapp.com",
    projectId: "webhosting-22e5f",
    storageBucket: "webhosting-22e5f.appspot.com",
    messagingSenderId: "1062915026719",
    appId: "1:1062915026719:web:e23125cea29adc7c2d8a2a",
    measurementId: "G-V2R33W33T6"
  };
// Initialize Firebase
let instance;
export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}

 