// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
// import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB_2PF-7pUTKPKcTuYAO6QIccw1cZdFjBo",
    authDomain: "folio-surya.firebaseapp.com",
    databaseURL: "https://folio-surya.firebaseio.com",
    projectId: "folio-surya",
    storageBucket: "folio-surya.appspot.com",
    messagingSenderId: "942653344779",
    appId: "1:942653344779:web:37c9b35565d99b1b6d4b0e",
    measurementId: "G-3G4B22ZM0W"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;