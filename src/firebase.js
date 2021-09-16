import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAwh1VXJHdWdzm33uFOURWC8EYHT8Za3zs",
    authDomain: "facebook--clone-b71e6.firebaseapp.com",
    projectId: "facebook--clone-b71e6",
    storageBucket: "facebook--clone-b71e6.appspot.com",
    messagingSenderId: "1099201834682",
    appId: "1:1099201834682:web:cb939e3a9b8094fe27dc83",
    measurementId: "G-P8QLTG4FJ1"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  

  const db=firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} 
  export default db