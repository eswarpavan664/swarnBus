/* eslint-disable no-unused-vars */
import firebase from 'firebase';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBkMNmR0qmffBjDpdF27JCj0xqxo6q2kNU",
  authDomain: "swarnbus.firebaseapp.com",
  databaseURL: "https://swarnbus-default-rtdb.firebaseio.com",
  projectId: "swarnbus",
  storageBucket: "swarnbus.appspot.com",
  messagingSenderId: "455573560462",
  appId: "1:455573560462:web:a944f86dfbc04de5a73ddf",
  measurementId: "G-5JZW0Q7PSX"
  };
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth};
export default firebaseDB.database().ref();