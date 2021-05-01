import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import  firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';
import firebase from "firebase" ;

// const firebase = require('firebase');
// require('firebase/firestore');

 //Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBen5AA6BUX3BDZfT7rT023UrsqCrXeVQQ",
  authDomain: "evernote-clone-1fa7b.firebaseapp.com",
  projectId: "evernote-clone-1fa7b",
  storageBucket: "evernote-clone-1fa7b.appspot.com",
  messagingSenderId: "616765048554",
  appId: "1:616765048554:web:e8c20766870ea42f27f993"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
