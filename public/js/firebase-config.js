// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDIxNf_h9_yHzhrUdgwtrJE3_oBFZaeHM",
  authDomain: "transaction-tracker-29bd0.firebaseapp.com",
  projectId: "transaction-tracker-29bd0",
  storageBucket: "transaction-tracker-29bd0.firebasestorage.app",
  messagingSenderId: "892790037819",
  appId: "1:892790037819:web:acb4c02464a9d327da2b1e",
  measurementId: "G-EMME2TV9ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();