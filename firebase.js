// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twick-v1.firebaseapp.com",
  projectId: "twick-v1",
  storageBucket: "twick-v1.appspot.com",
  messagingSenderId: "895541470468",
  appId: "1:895541470468:web:4f6faa3e4de9d9a09d9c51"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db =getStorage();
export{app,db,storage};