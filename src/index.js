import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "firebase/firestore";

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';

// TODO: Agrega SDKs de Firebase que desees usar en la siguiente URL
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de tu aplicación web de Firebase
// Para SDK de Firebase JS v7.20.0 o posteriores, `measurementId` es opcional
const firebaseConfig = {
  apiKey: "AIzaSyA-PNlg04zi7QWFPqWnM0DQyyIIUtbhxrM",
  authDomain: "livetrainingbest.firebaseapp.com",
  databaseURL: "https://livetrainingbest-default-rtdb.firebaseio.com",
  projectId: "livetrainingbest",
  storageBucket: "livetrainingbest.appspot.com",
  messagingSenderId: "1034156550321",
  appId: "1:1034156550321:web:3d9ca2e4e4103cc2349a90",
  measurementId: "G-V93LMMM0MW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
