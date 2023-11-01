// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqkWxV-niMOh6YL8yOwj_K4c2PTQEL1ys",
    authDomain: "page-on-eventplanner.firebaseapp.com",
    projectId: "page-on-eventplanner",
    storageBucket: "page-on-eventplanner.appspot.com",
    messagingSenderId: "333553214229",
    appId: "1:333553214229:web:90845d26346bf9c3bbbf1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;