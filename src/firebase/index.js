import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLuwfK7aD6hAsbZOcgs0pPQUVfu9ujECw",
  authDomain: "github-profile-r.firebaseapp.com",
  projectId: "github-profile-r",
  storageBucket: "github-profile-r.appspot.com",
  messagingSenderId: "170839025813",
  appId: "1:170839025813:web:3396321f55aa7e743e539c",
  measurementId: "G-5FV2YYGWLP"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);