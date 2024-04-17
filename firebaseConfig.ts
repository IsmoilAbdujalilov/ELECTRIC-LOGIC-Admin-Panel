// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFR-fY_poNw1oVD14UP1DdvX7hzEOMCmw",
  authDomain: "eccommerce-site-45091.firebaseapp.com",
  projectId: "eccommerce-site-45091",
  storageBucket: "eccommerce-site-45091.appspot.com",
  messagingSenderId: "679429688913",
  appId: "1:679429688913:web:21fc3c60f8b4f1364c7270",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
