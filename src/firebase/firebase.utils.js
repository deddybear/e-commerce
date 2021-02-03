import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDuB2u_gObUTfWXetkkGrPnq9qhamkgWg4",
  authDomain: "crwn-db-b6ecd.firebaseapp.com",
  projectId: "crwn-db-b6ecd",
  storageBucket: "crwn-db-b6ecd.appspot.com",
  messagingSenderId: "47683140080",
  appId: "1:47683140080:web:a7da932ef61ac24d9f4535",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
