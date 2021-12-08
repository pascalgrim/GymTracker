import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
//   });

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJ_QooodYH_vznpFngMDIDuyQOIKpL0T0",
  authDomain: "gymtrackerweb.firebaseapp.com",
  databaseURL:
    "https://gymtrackerweb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gymtrackerweb",
  storageBucket: "gymtrackerweb.appspot.com",
  messagingSenderId: "96062073948",
  appId: "1:96062073948:web:f436e2863775fbc7864a99",
});
export const auth = app.auth();
export const db = firebase.firestore();
export default app;
