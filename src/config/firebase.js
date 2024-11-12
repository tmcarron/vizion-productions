// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7EXT45rNQfiWk7s7HYaI2Vp7660rUI9Y",
  authDomain: "vizion-production.firebaseapp.com",
  projectId: "vizion-production",
  storageBucket: "vizion-production.firebasestorage.app",
  messagingSenderId: "501658953195",
  appId: "1:501658953195:web:52fa9be81ffb415053a5ae",
  measurementId: "G-EG0CT7Q2Y8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
