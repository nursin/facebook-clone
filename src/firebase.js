// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeIM9maGcdWB1F7HjrhENXmxdfWKs-jNc",
  authDomain: "facebook-clone-5a3d7.firebaseapp.com",
  projectId: "facebook-clone-5a3d7",
  storageBucket: "facebook-clone-5a3d7.appspot.com",
  messagingSenderId: "323050538921",
  appId: "1:323050538921:web:910461ba83a05bdecf66b8",
  measurementId: "G-M6RGGFRXH3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // connects our app to firebase

const db = firebaseApp.firestore(); // access to database

const auth = firebase.auth(); // allows us to login sign in

const provider = new firebase.auth.GoogleAuthProvider(); // this will tell firebase that we want the google login service

// to access these from outside file will export
export { auth, provider };
export default db;