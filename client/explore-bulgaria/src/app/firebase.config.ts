import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXMXUN-K7Z0mjlOijjp7M2fIH-XhcYOeM",
    authDomain: "explore-bulgaria-be753.firebaseapp.com",
    projectId: "explore-bulgaria-be753",
    storageBucket: "explore-bulgaria-be753.firebasestorage.app",
    messagingSenderId: "302864070270",
    appId: "1:302864070270:web:16691be0ef6e63ec8f8a2f"
  };

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);