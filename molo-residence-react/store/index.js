// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbTRQSB5VxhYymhQ60q60ay_A2lyBD5VE",
  authDomain: "breakfast-molo-residence.firebaseapp.com",
  projectId: "breakfast-molo-residence",
  storageBucket: "breakfast-molo-residence.appspot.com",
  messagingSenderId: "159363562351",
  appId: "1:159363562351:web:035535d17799d56ce1469a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);

export default db;
