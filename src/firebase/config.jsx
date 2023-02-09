// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkVpszOIw-XyEa7GjwiAp2K66CjOXuGlQ",
  authDomain: "piltri-31dc6.firebaseapp.com",
  projectId: "piltri-31dc6",
  storageBucket: "piltri-31dc6.appspot.com",
  messagingSenderId: "214352939987",
  appId: "1:214352939987:web:01c36e3c7bfc7ffc8ffd26",
  measurementId: "G-Y08DCMQ1LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()