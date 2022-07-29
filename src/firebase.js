// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFdt5oJTeiqaZSavERfoDvWmz8jfONNvY",
  authDomain: "tinder-clone-6a756.firebaseapp.com",
  projectId: "tinder-clone-6a756",
  storageBucket: "tinder-clone-6a756.appspot.com",
  messagingSenderId: "647489122899",
  appId: "1:647489122899:web:bdbb0f85bc16f39e3e0ca6",
  measurementId: "G-DS77KKTK2W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const db = getFirestore(app);
