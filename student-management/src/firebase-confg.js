// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEhNqSPyqANRaE3T6fAJ7hJdEc5Tw--8M",
  authDomain: "student-management-syste-81e8f.firebaseapp.com",
  projectId: "student-management-syste-81e8f",
  storageBucket: "student-management-syste-81e8f.appspot.com",
  messagingSenderId: "257611781931",
  appId: "1:257611781931:web:960d12b0b9a93a3524176e",
  measurementId: "G-JRH2R4KG4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }