import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";
// import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyB8RKXium_N9tkKQ5jC0bOzQb3neV9XxQ4",
    authDomain: "church-admin-92099.firebaseapp.com",
    projectId: "church-admin-92099",
    storageBucket: "church-admin-92099.appspot.com",
    messagingSenderId: "312877983267",
    appId: "1:312877983267:web:86d77298a945225c153396",
    measurementId: "G-DYSJCBMDVE"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
//   fire.analytics();
  
  const auth = fire.auth();
  const store = fire.firestore();
  
  export { auth, store };
