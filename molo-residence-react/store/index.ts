// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

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

// Init services
const db = getFirestore(app);
export const sendOrder = (orderData: any) => {
  return addDoc(collection(db, "breakfast"), orderData);
};
export { db };
