// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lofivibe-generator.firebaseapp.com",
  projectId: "lofivibe-generator",
  storageBucket: "lofivibe-generator.appspot.com",
  messagingSenderId: "88396244747",
  appId: "1:88396244747:web:9a585432accaf1f162240e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);