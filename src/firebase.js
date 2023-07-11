import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1FnMGsS8F4j3kOF7WWP0inig28yVIKVQ",
  authDomain: "recipe-app-841f4.firebaseapp.com",
  projectId: "recipe-app-841f4",
  storageBucket: "recipe-app-841f4.appspot.com",
  messagingSenderId: "717184383419",
  appId: "1:717184383419:web:430f6b3726bab87d0d6c9e",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
