import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDe6mlr42a6CdXTQYEE3q47fGHoLyI038",
    authDomain: "whatsapp-clone-322c0.firebaseapp.com",
    projectId: "whatsapp-clone-322c0",
    storageBucket: "whatsapp-clone-322c0.appspot.com",
    messagingSenderId: "940378988747",
    appId: "1:940378988747:web:2be88edaa3304b26c8bb4e",
    measurementId: "G-N8RX17B44R"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth, googleProvider };

  export default db;