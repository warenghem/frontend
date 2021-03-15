import firebase from "firebase/app";
import "firebase/storage";
// get config from Firebase console
const firebaseConfig = {
    apiKey: "AIzaSyCXPNo1F0mrFWbERm56uCUHOD3pwpkjkws",
    authDomain: "warenghem-studios.firebaseapp.com",
    databaseURL: "https://warenghem-studios-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "warenghem-studios",
    storageBucket: "warenghem-studios.appspot.com",
    messagingSenderId: "1017803388610",
    appId: "1:1017803388610:web:5898afc4a39054be6ead5b",
    measurementId: "G-V9TJG4YNDH"
};

firebase.apps && !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : "";

export const FirebaseStorage = firebase.storage();
export default firebase;