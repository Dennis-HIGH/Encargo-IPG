// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDklfu5QrtTpOYCSurxDL2uhHsHkyEZbYg",
  authDomain: "login-87f48.firebaseapp.com",
  projectId: "login-87f48",
  storageBucket: "login-87f48.firebasestorage.app",
  messagingSenderId: "73435636260",
  appId: "1:73435636260:web:819b49ea307e8a44eeaeb1",
  measurementId: "G-Q9X2E83X1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
