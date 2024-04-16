import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Replace the following with your app's Firebase project configuration

let firebaseConfig = {
  apiKey: "AIzaSyBLKfsx9yk8kt9horHJw6fbYPO78ew-OBg",
  authDomain: "clone2-bff30.firebaseapp.com",
  projectId: "clone2-bff30",
  storageBucket: "clone2-bff30.appspot.com",
  messagingSenderId: "222758370468",
  appId: "1:222758370468:web:7d7077c3beb06d7716fa31",
  measurementId: "G-BZS08EMVKG",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
