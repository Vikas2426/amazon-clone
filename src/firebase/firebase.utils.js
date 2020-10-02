import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPH1mjsUtqA9fkCNyyD7f1nESIEwRhCWc",
    authDomain: "clone-81a36.firebaseapp.com",
    databaseURL: "https://clone-81a36.firebaseio.com",
    projectId: "clone-81a36",
    storageBucket: "clone-81a36.appspot.com",
    messagingSenderId: "652787402532",
    appId: "1:652787402532:web:491bd8e9a414df6b5655b1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserWithEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const signInWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);
export default firebase;