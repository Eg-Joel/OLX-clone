import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBReiC4OWEP5555IbYc0ltVwARSIJe50DQ",
    authDomain: "olx-colne.firebaseapp.com",
    projectId: "olx-colne",
    storageBucket: "olx-colne.appspot.com",
    messagingSenderId: "98594394143",
    appId: "1:98594394143:web:d63e1cdaf3fbca9542452a",
    measurementId: "G-9MFDSBPS8W"
  };

 export default firebase.initializeApp(firebaseConfig)