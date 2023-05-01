// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXs_b06O6mXbhoUF_BjJSKIrl50E_OHKs",
    authDomain: "food-hub-eaff5.firebaseapp.com",
    projectId: "food-hub-eaff5",
    storageBucket: "food-hub-eaff5.appspot.com",
    messagingSenderId: "140578394380",
    appId: "1:140578394380:web:4e4876c52f3f9d2473f929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;