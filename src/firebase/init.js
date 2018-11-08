import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCRBdZ6CRqEPyRbZ3oeyysAMOYQ-UHX_5g",
  authDomain: "udemy-ninja-chat-8dc9f.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-8dc9f.firebaseio.com",
  projectId: "udemy-ninja-chat-8dc9f",
  storageBucket: "udemy-ninja-chat-8dc9f.appspot.com",
  messagingSenderId: "350277508498"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()