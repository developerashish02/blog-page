
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUHVsEavHAD4mFdOHLgkLD2FWvJpMfQJ8",
  authDomain: "blog-3464e.firebaseapp.com",
  projectId: "blog-3464e",
  storageBucket: "blog-3464e.appspot.com",
  messagingSenderId: "751705549856",
  appId: "1:751705549856:web:d50aa7220524bac783a045"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// initialize firestore 
export const db = firebase.firestore(); 
