import * as firebase from 'firebase';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzySg_OX8xGpYmtcwVEONm8cVb3neC8LE",
  authDomain: "travelboss-8f1bc.firebaseapp.com",
  projectId: "travelboss-8f1bc",
  storageBucket: "travelboss-8f1bc.appspot.com",
  messagingSenderId: "296308344818",
  appId: "1:296308344818:web:f1696bc92611f1a6d68d6b",
  measurementId: "G-9907F8863G"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;