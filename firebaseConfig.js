import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDm0NHKWOXH3RwVnQb1-gupBqCyjvlroqo",
    authDomain: "deltahacks-x-ac810.firebaseapp.com",
    projectId: "deltahacks-x-ac810",
    storageBucket: "deltahacks-x-ac810.appspot.com",
    messagingSenderId: "554149153194",
    appId: "1:554149153194:web:af1743fd509916fdd943d3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);