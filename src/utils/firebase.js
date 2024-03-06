// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ggZqmSTdAqGDPZTrEYsCPmFkQI9p_Q4",
  authDomain: "netflixgpt-344a9.firebaseapp.com",
  projectId: "netflixgpt-344a9",
  storageBucket: "netflixgpt-344a9.appspot.com",
  messagingSenderId: "417479319348",
  appId: "1:417479319348:web:ea2d703fa19c1aa981cf61",
  measurementId: "G-7GTR42YP5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
