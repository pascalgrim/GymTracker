// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {Auth} from "firebase/auth";
//import {} from "firebase/database";
// Your web app's Firebase configuration

import React from 'react'

export default function firebase() {
    return (
        <div>
            
        </div>
    )
}

const firebaseConfig = {
  apiKey: "AIzaSyAJ_QooodYH_vznpFngMDIDuyQOIKpL0T0",
  authDomain: "gymtrackerweb.firebaseapp.com",
  databaseURL: "https://gymtrackerweb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gymtrackerweb",
  storageBucket: "gymtrackerweb.appspot.com",
  messagingSenderId: "96062073948",
  appId: "1:96062073948:web:f436e2863775fbc7864a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

