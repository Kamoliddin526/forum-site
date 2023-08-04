import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2HtC-ZmnRrPXAcsguYUwroaaT1Kcc75U",
  authDomain: "forum-2f7e6.firebaseapp.com",
  projectId: "forum-2f7e6",
  storageBucket: "forum-2f7e6.appspot.com",
  messagingSenderId: "1031561575469",
  appId: "1:1031561575469:web:30e088f23e3bb10f91cca4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const googleProvider  = new GoogleAuthProvider;
