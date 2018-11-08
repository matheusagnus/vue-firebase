import firebase from 'firebase'
import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAL02e50sv5kvIRLSZlt3TZNq8RkYT8pG0",
  authDomain: "projeto-github-search.firebaseapp.com",
  databaseURL: "https://projeto-github-search.firebaseio.com",
  projectId: "projeto-github-search",
  storageBucket: "projeto-github-search.appspot.com",
  messagingSenderId: "268171671874"
};

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  
  export default firebaseApp.firestore()