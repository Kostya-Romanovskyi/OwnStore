// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAKMU36irGE1JSyXTxwrzxVPKlIXkOSz8",
  authDomain: "owncinema-f9e30.firebaseapp.com",
  databaseURL:
    "https://owncinema-f9e30-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "owncinema-f9e30",
  storageBucket: "owncinema-f9e30.appspot.com",
  messagingSenderId: "913528251226",
  appId: "1:913528251226:web:94b39f62805c7e6c050963",
  measurementId: "G-CN5B54PCQ2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
