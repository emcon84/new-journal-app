
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDghNwtWp4W1BGK8nFg6Q3Y5VAwSbNZDD4",
    authDomain: "react-app-journal-86f55.firebaseapp.com",
    projectId: "react-app-journal-86f55",
    storageBucket: "react-app-journal-86f55.appspot.com",
    messagingSenderId: "875201325405",
    appId: "1:875201325405:web:a23d969fc1d9b3c58620b4"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebasDB = getFirestore(FirebaseApp)