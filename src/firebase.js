
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDxIj19T0_Zz3tD-cvJWzZIHT_NCy9gt7I",
  authDomain: "artistic-alley-official.firebaseapp.com",
  projectId: "artistic-alley-official",
  storageBucket: "artistic-alley-official.appspot.com",
  messagingSenderId: "491116990371",
  appId: "1:491116990371:web:f22fc4b06bd1c68177d416",
  measurementId: "G-9PSJ1TDPKK"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage} ;

