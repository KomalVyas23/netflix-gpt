// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZ4rSFSb2QvzSjrou4NcCiLUOa92mRDE",
  authDomain: "netflixgpt-20425.firebaseapp.com",
  projectId: "netflixgpt-20425",
  storageBucket: "netflixgpt-20425.appspot.com",
  messagingSenderId: "521121682295",
  appId: "1:521121682295:web:013c4107ec2d2775b74772",
  measurementId: "G-QFJFJB5CMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();