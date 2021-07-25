import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBw437FqxxIdvgHyJ_RzHrZN4_B6Zb9OOM",
    authDomain: "tinder-clone-2d44c.firebaseapp.com",
    projectId: "tinder-clone-2d44c",
    storageBucket: "tinder-clone-2d44c.appspot.com",
    messagingSenderId: "132355668403",
    appId: "1:132355668403:web:32354837b06ba6e6f233c6",
    measurementId: "G-06Q6F85FQX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
