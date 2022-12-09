import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNKVANB9umG27EbnW5AVgLe3dRzLRQZTg",
    authDomain: "alpha-bi-assignment.firebaseapp.com",
    projectId: "alpha-bi-assignment",
    storageBucket: "alpha-bi-assignment.appspot.com",
    messagingSenderId: "46376930525",
    appId: "1:46376930525:web:95f40b262d8af29f461f34"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };