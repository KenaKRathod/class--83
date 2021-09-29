import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyB-9NgiD96e3osiuHW0Gup63qKPXclXxrk",
  authDomain: "book-santa-87af5.firebaseapp.com",
  projectId: "book-santa-87af5",
  storageBucket: "book-santa-87af5.appspot.com",
  messagingSenderId: "914910395893",
  appId: "1:914910395893:web:ae6e3f7a6c56b11ba634bc"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore()