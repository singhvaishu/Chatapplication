
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAft6-B__GTiDiI8am8YalD9WYcxs_GRUc",
    authDomain: "fir-chating-a79e4.firebaseapp.com",
    projectId: "fir-chating-a79e4",
    storageBucket: "fir-chating-a79e4.appspot.com",
    messagingSenderId: "77873732015",
    appId: "1:77873732015:web:09e3e12bdc7231e435775a",
    measurementId: "G-531CC8BSMX"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);