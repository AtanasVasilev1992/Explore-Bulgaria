import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnB_gRK9M2_oi4Nu_xrCCW6Ugxlyjjkfc",
  authDomain: "explore-bg-19cba.firebaseapp.com",
  projectId: "explore-bg-19cba",
  storageBucket: "explore-bg-19cba.firebasestorage.app",
  messagingSenderId: "884276388840",
  appId: "1:884276388840:web:63de04e111b7d1f9a5ba5d",
  measurementId: "G-WJXZQRG77N"
  };

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);