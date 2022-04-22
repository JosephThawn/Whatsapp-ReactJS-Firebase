import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqihE-Mm5qgm-2NYxgwTbMxwTo9Ms1YMk",
  authDomain: "whatsapp-reactjs-2dc20.firebaseapp.com",
  projectId: "whatsapp-reactjs-2dc20",
  storageBucket: "whatsapp-reactjs-2dc20.appspot.com",
  messagingSenderId: "313478512768",
  appId: "1:313478512768:web:f6633101c678c63de66665",
  measurementId: "G-21BECM733V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
