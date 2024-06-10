// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhCt6Qff2Pruc6Un5inGjoJkGQizY5bA",
  authDomain: "dragon-news-auth-a3080.firebaseapp.com",
  projectId: "dragon-news-auth-a3080",
  storageBucket: "dragon-news-auth-a3080.appspot.com",
  messagingSenderId: "562786281644",
  appId: "1:562786281644:web:d6ed558756bc31e9bed709",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
