import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASqJt9veLd9frBjCK2nd9a70z9-4J0dek",
    authDomain: "klassprojekt-ead7e.firebaseapp.com",
    databaseURL: "https://klassprojekt-ead7e.firebaseio.com",
    projectId: "klassprojekt-ead7e",
    storageBucket: "klassprojekt-ead7e.appspot.com",
    messagingSenderId: "412895436299",
    appId: "1:412895436299:web:34d9e01366f5a9ab0e710e",
    measurementId: "G-1LZ6VXFHLR"
  };

  firebase.initializeApp(firebaseConfig);

 // firebase.firestore().settings({timestampsInSnapshots:true});

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const auth = firebase.auth();
  export default firebase;