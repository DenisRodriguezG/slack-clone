import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNsnw6_sjc2qv7bsO_KEbALVmLAOkc3_Q",
    authDomain: "slack-clone-f1694.firebaseapp.com",
    projectId: "slack-clone-f1694",
    storageBucket: "slack-clone-f1694.appspot.com",
    messagingSenderId: "657185050905",
    appId: "1:657185050905:web:7478d278ded66fa5607588",
    measurementId: "G-K2Q1NG9C09"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;