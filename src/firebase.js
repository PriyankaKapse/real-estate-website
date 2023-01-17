// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD2XBO1Lzz98dHCi8jT3BR1xSzkitSixA",
  authDomain: "real-estate-website-9845c.firebaseapp.com",
  projectId: "real-estate-website-9845c",
  storageBucket: "real-estate-website-9845c.appspot.com",
  messagingSenderId: "557085664104",
  appId: "1:557085664104:web:1eb65b7e27ff23f0396cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();