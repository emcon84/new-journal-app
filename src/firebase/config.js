
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

//dev / prod
// const firebaseConfig = {
//     apiKey: "AIzaSyDghNwtWp4W1BGK8nFg6Q3Y5VAwSbNZDD4",
//     authDomain: "react-app-journal-86f55.firebaseapp.com",
//     projectId: "react-app-journal-86f55",
//     storageBucket: "react-app-journal-86f55.appspot.com",
//     messagingSenderId: "875201325405",
//     appId: "1:875201325405:web:a23d969fc1d9b3c58620b4"
// };

//testing

const firebaseConfig = {
    apiKey: "AIzaSyDzQjviCQP_XA2V488Wqzq_gTRFb7PwBWU",
    authDomain: "jump-a2f3f.firebaseapp.com",
    projectId: "jump-a2f3f",
    storageBucket: "jump-a2f3f.appspot.com",
    messagingSenderId: "632189075311",
    appId: "1:632189075311:web:504c3a4e9a9dca2c59f29a",
    measurementId: "G-NBNC4J0DF6"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)