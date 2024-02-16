// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPBWaKFmZkYZSdoUIwfjeW3vYCwG0t2S4",
  authDomain: "hilallink-9dfb4.firebaseapp.com",
  projectId: "hilallink-9dfb4",
  storageBucket: "hilallink-9dfb4.appspot.com",
  messagingSenderId: "66036106918",
  appId: "1:66036106918:web:3ad2ed733081b1d3375667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export { auth, provider, database };
