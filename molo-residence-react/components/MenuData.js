// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCbTRQSB5VxhYymhQ60q60ay_A2lyBD5VE",
//   authDomain: "breakfast-molo-residence.firebaseapp.com",
//   projectId: "breakfast-molo-residence",
//   storageBucket: "breakfast-molo-residence.appspot.com",
//   messagingSenderId: "159363562351",
//   appId: "1:159363562351:web:035535d17799d56ce1469a",
// };

// // Initialize Firebase app and Firestore
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Reference to the "menu" collection
// const colRef = collection(db, "menu");

// // Function to fetch menu data
// export const fetchMenuData = async () => {
//   try {
//     const snapshot = await getDocs(colRef);
//     const menu = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       name: doc.data().name,
//       description: doc.data().description,
//       option1: doc.data().option1,
//       option2: doc.data().option2,
//       option3: doc.data().option3,
//     }));
//     return menu;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };
