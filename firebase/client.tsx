// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFs7JNlfsfEdJdiMKvKdCHM3XOvBaXs_Y",
  authDomain: "prepbud-b4052.firebaseapp.com",
  projectId: "prepbud-b4052",
  storageBucket: "prepbud-b4052.firebasestorage.app",
  messagingSenderId: "939592204376",
  appId: "1:939592204376:web:d5ce69c7f5830a54d88a2d",
  measurementId: "G-WGYC6W4LWX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);