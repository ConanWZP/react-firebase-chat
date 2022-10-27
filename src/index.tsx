import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import initializeApp = firebase.initializeApp;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIHiRfUuonPD6_q2CFnJzdkJ_CaqAsTFA",
    authDomain: "chat-react-4a3ce.firebaseapp.com",
    projectId: "chat-react-4a3ce",
    storageBucket: "chat-react-4a3ce.appspot.com",
    messagingSenderId: "171152094464",
    appId: "1:171152094464:web:ae5e3540e7c00f60206fe5",
    measurementId: "G-VE5DCTDDF5"
};

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);*/

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app);

export const Context = createContext<any>(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

interface forValue {
    value: any
}

// @ts-ignore
root.render(
    <Context.Provider value={ {firebase, auth, firestore} }>
        <App/>
    </Context.Provider>

);

