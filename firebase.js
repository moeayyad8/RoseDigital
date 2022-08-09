import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAPpt7wyx9LLoIGcUpfcnfieDEI720kfRA",
    authDomain: "content-actors.firebaseapp.com",
    projectId: "content-actors",
    storageBucket: "content-actors.appspot.com",
    messagingSenderId: "721507627073",
    appId: "1:721507627073:web:d8311f013e51dd7d8856c0",
    measurementId: "G-15RMXB25FZ"
  };


 export const app = initializeApp(firebaseConfig)
 export const database = getFirestore(app)
  
 