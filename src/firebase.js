import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.CHAT-APIKEY,
//   authDomain: process.env.CHAT-AUTHDOMAIN,
//   databaseURL: process.env.CHAT-DATABASEURL,
//   projectId: process.env.CHAT-PROJECTID,
//   storageBucket: process.env.CHAT-STORAGEBUCKET,
//   messagingSenderId: process.env.CHAT-MESSAGINGSENDERID,
//   appId: process.env.CHAT-APPID
// };
const firebaseConfig = {
    apiKey: "AIzaSyDjP9PB2A3H2BVOfaAyldsMggNbnAKTSIQ",
    authDomain: "fire-chat-eded6.firebaseapp.com",
    databaseURL: "https://fire-chat-eded6-default-rtdb.firebaseio.com",
    projectId: "fire-chat-eded6",
    storageBucket: "fire-chat-eded6.appspot.com",
    messagingSenderId: "71840315100",
    appId: "1:71840315100:web:ad25a82d231d145deea619"
  };
  
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
export const authService = firebase.auth();


