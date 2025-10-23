// src/firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

// 🚨 Configuration copied directly from your original file
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
const auth = getAuth(app);

// Exporting necessary functions
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
};
