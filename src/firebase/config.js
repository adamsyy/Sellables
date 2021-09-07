import firebase from "firebase";
import 'firebase/auth';    

const firebaseConfig = {
    apiKey: "AIzaSyBPflbC4curpivPHFef9Gf_Hxl8tKP2VNI",
    authDomain: "fir-c6e2d.firebaseapp.com",
    projectId: "fir-c6e2d",
    storageBucket: "fir-c6e2d.appspot.com",
    messagingSenderId: "975286876797",
    appId: "1:975286876797:web:4dc5a3c3dd1c4f17aa8f14",
    measurementId: "G-HZJGKTQG6T"
  };
  export default firebase.initializeApp(firebaseConfig)