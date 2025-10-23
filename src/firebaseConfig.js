import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhzuzc-oOMoo-3bDz_FXK1t6gcVTaS9i0",
  authDomain: "fitness-hub-6333b.firebaseapp.com",
  projectId: "fitness-hub-6333b",
  storageBucket: "fitness-hub-6333b.firebasestorage.app",
  messagingSenderId: "222419730157",
  appId: "1:222419730157:web:a9a84fd196ffedb61516e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export the service
const auth = getAuth(app);

// Exporting necessary functions for use in modals
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
