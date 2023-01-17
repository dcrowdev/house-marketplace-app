import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiHVpAjiEUmBY80-eIhQjdd_q-GFGXat4",
  authDomain: "house-marketplace-app-34fd3.firebaseapp.com",
  projectId: "house-marketplace-app-34fd3",
  storageBucket: "house-marketplace-app-34fd3.appspot.com",
  messagingSenderId: "203938047827",
  appId: "1:203938047827:web:121634d1e20e34fbcd23a6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();