// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ZZcIJF52K0Urf4_fo7nwMqI2MvLeZNY",
  authDomain: "music-events-managements.firebaseapp.com",
  projectId: "music-events-managements",
  storageBucket: "music-events-managements.appspot.com",
  messagingSenderId: "578547278953",
  appId: "1:578547278953:web:ea6222acab55e2c935eef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;