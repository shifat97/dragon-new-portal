// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMg_LkBX92UmxrUb623tDVL4fZu37icG8",
  authDomain: "dragon-news-portal-892f2.firebaseapp.com",
  projectId: "dragon-news-portal-892f2",
  storageBucket: "dragon-news-portal-892f2.appspot.com",
  messagingSenderId: "1031256545230",
  appId: "1:1031256545230:web:4eebceaa5e6703fd0f3d9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
