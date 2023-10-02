// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDymHKYkVfgQk57q10gj22Ngr7b-bj2Vy4",
  authDomain: "react-dregon-news.firebaseapp.com",
  projectId: "react-dregon-news",
  storageBucket: "react-dregon-news.appspot.com",
  messagingSenderId: "64343843659",
  appId: "1:64343843659:web:d95d1e4e12c461ddcbfece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;