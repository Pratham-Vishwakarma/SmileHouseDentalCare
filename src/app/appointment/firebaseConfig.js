// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA--Ca2bO-A5mkP0Lsn0JWz5jkGqrKv7OA",
  authDomain: "doctor-ratnesh-smilehouse.firebaseapp.com",
  projectId: "doctor-ratnesh-smilehouse",
  storageBucket: "doctor-ratnesh-smilehouse.firebasestorage.app",
  messagingSenderId: "1014009742205",
  appId: "1:1014009742205:web:1103f6a43f2e996b3a8214",
  measurementId: "G-3DJZ7BDSVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };