// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Dev / Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyB6VEM7v4aX8McYXlWhBDKqhNY3lmgUmjM",
//   authDomain: "react-cursos-6040e.firebaseapp.com",
//   projectId: "react-cursos-6040e",
//   storageBucket: "react-cursos-6040e.appspot.com",
//   messagingSenderId: "476889166411",
//   appId: "1:476889166411:web:b54eb9c7ba3780cdc093ce"
// };

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyDzJ3AazNcOCxKY5QyjZTD6-CzIhV0QI28",
  authDomain: "ecommerce-dardan.firebaseapp.com",
  projectId: "ecommerce-dardan",
  storageBucket: "ecommerce-dardan.appspot.com",
  messagingSenderId: "474799356443",
  appId: "1:474799356443:web:02449b0977a813b4ea16be"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );