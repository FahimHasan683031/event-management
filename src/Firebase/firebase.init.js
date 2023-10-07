// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAScIub-FUBNGhySBb10S-Yd2IHfslA6WY",
  authDomain: "event-management-70885.firebaseapp.com",
  projectId: "event-management-70885",
  storageBucket: "event-management-70885.appspot.com",
  messagingSenderId: "37951629037",
  appId: "1:37951629037:web:6332f1ebc1fc5ec4f94ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);