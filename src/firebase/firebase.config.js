// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPVKSNvi5BEhDw5HgvR3WZHEF28r0CVUs",
  authDomain: "e-learning-platform-cdcbc.firebaseapp.com",
  projectId: "e-learning-platform-cdcbc",
  storageBucket: "e-learning-platform-cdcbc.appspot.com",
  messagingSenderId: "232439204355",
  appId: "1:232439204355:web:bff17de2ba65bac5d09c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;