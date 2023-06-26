// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjTuv3Uvt0Hr78x8UzWYHGyxd3btS2qbE",
  authDomain: "meu-projeto-1890c.firebaseapp.com",
  projectId: "meu-projeto-1890c",
  storageBucket: "meu-projeto-1890c.appspot.com",
  messagingSenderId: "89693911896",
  appId: "1:89693911896:web:06eb622848cd12106ac32d",
  measurementId: "G-E223FV5X6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;