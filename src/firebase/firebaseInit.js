import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwH6CGFuWFKqxlILlviCcuoUrc8MIIpG0",
    authDomain: "blogs-bb1e6.firebaseapp.com",
    projectId: "blogs-bb1e6",
    storageBucket: "blogs-bb1e6.appspot.com",
    messagingSenderId: "1043396809654",
    appId: "1:1043396809654:web:618e3fac8f274e8e266717"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();