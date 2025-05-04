// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDklfu5QrtTpOYCSurxDL2uhHsHkyEZbYg",
  authDomain: "login-87f48.firebaseapp.com",
  projectId: "login-87f48",
  storageBucket: "login-fc8b6.firebasestorage.app",
  messagingSenderId: "73435636260",
  appId: "1:84088347751:web:d95f0b9a34fe4af67248c2",
  measurementId: "G-QH71PQG7LH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
