import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBexmyLxXe0U0p9NjMnTOAYLAn8m24yUIA",
    authDomain: "discord-redux-live.firebaseapp.com",
    projectId: "discord-redux-live",
    storageBucket: "discord-redux-live.appspot.com",
    messagingSenderId: "105572407984",
    appId: "1:105572407984:web:c159d3b20f6a6d9f27f975"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth= firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db