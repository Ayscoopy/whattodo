import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCfYytVCKjEh2uqbSbVGwbwnrAG4Ja0B_Y",
    authDomain: "whattodo-d8697.firebaseapp.com",
    databaseURL: "https://whattodo-d8697.firebaseio.com",
    projectId: "whattodo-d8697",
    storageBucket: "",
    messagingSenderId: "67562895835"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;