import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAt_YWE6JXJyLC08HHQvcas6JPcNaqTErA",
  authDomain: "notesbetaken.firebaseapp.com",
  databaseURL: "https://notesbetaken.firebaseio.com",
  projectId: "notesbetaken",
  storageBucket: "notesbetaken.appspot.com",
  messagingSenderId: "340173357363",
  appId: "1:340173357363:web:485d440d7b10eef0603e46",
  measurementId: "G-LKGBC513X6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
