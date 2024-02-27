import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYKIK-Bk2gxWmtrrlIvOM73HtFwMcVuKc",
  authDomain: "react-firebase-auth-95d50.firebaseapp.com",
  projectId: "react-firebase-auth-95d50",
  storageBucket: "react-firebase-auth-95d50.appspot.com",
  messagingSenderId: "122538777808",
  appId: "1:122538777808:web:2f1f8cb2527a742533d2d5",
  measurementId: "G-9XN9FFLPC8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };