// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6VEM7v4aX8McYXlWhBDKqhNY3lmgUmjM",
  authDomain: "react-cursos-6040e.firebaseapp.com",
  projectId: "react-cursos-6040e",
  storageBucket: "react-cursos-6040e.appspot.com",
  messagingSenderId: "476889166411",
  appId: "1:476889166411:web:b54eb9c7ba3780cdc093ce"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );