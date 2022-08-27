
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnviroments } from '../helpers/getEnviroments';

// dev / prod
// const firebaseConfig = {
//     apiKey: "AIzaSyDghNwtWp4W1BGK8nFg6Q3Y5VAwSbNZDD4",
//     authDomain: "react-app-journal-86f55.firebaseapp.com",
//     projectId: "react-app-journal-86f55",
//     storageBucket: "react-app-journal-86f55.appspot.com",
//     messagingSenderId: "875201325405",
//     appId: "1:875201325405:web:a23d969fc1d9b3c58620b4"
// };

//testing

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
    VITE_MEASUREMENTID
} = getEnviroments();




const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID
};

console.log(firebaseConfig)

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)