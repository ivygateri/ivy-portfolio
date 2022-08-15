// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe8zqGRDDwIwK9DD9qWfz4fkhpyI0gwQ8",
  authDomain: "ivy-portfolio-1ffc4.firebaseapp.com",
  projectId: "ivy-portfolio-1ffc4",
  storageBucket: "ivy-portfolio-1ffc4.appspot.com",
  messagingSenderId: "964745155759",
  appId: "1:964745155759:web:22afb8759b20d2c729f05a",
  measurementId: "G-ZHB7TF2HLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);