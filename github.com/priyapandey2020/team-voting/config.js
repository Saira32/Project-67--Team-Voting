import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA8EqwNN-0gZUwcWCYxy8WPgogAxrw7p-Y",
  authDomain: "c-67-c1f88.firebaseapp.com",
  databaseURL: "https://c-67-c1f88-default-rtdb.firebaseio.com",
  projectId: "c-67-c1f88",
  storageBucket: "c-67-c1f88.appspot.com",
  messagingSenderId: "669583132190",
  appId: "1:669583132190:web:757693ef92b04f54ced00f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();