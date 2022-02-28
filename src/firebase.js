
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeLXiRDL56uThp8Lluv7RsvmRPtQzswgk",
    authDomain: "my-project-9a21a.firebaseapp.com",
    projectId: "my-project-9a21a",
    storageBucket: "my-project-9a21a.appspot.com",
    messagingSenderId: "595781663568",
    appId: "1:595781663568:web:37ae518331d6efd9264a55",
    measurementId: "G-2VX3TG0YCR"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;