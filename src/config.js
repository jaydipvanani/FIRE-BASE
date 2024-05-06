import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCiMNwYoiHkL8Wau00nJ0lwwDayyvEAhtU",
    authDomain: "fire-base-61872.firebaseapp.com",
    projectId: "fire-base-61872",
    storageBucket: "fire-base-61872.appspot.com",
    messagingSenderId: "896656277560",
    appId: "1:896656277560:web:53d12210ecc1938422e6cd",
    measurementId: "G-JPXS4RBX2M"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };