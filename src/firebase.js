// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //initialize the Authentication SDK

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT6qqf48qXAg4Dmz4YOj2ojuV8z9pHilw",
  authDomain: "auth-7babf.firebaseapp.com",
  projectId: "auth-7babf",
  storageBucket: "auth-7babf.appspot.com",
  messagingSenderId: "661256794824",
  appId: "1:661256794824:web:43ebed0e3b643a8bc06bfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); //匯出auth接收到的資料

export default app;
