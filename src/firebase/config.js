import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDVmx47UnRDClsCRCk0BcMY50ajzaTTbgI",
  authDomain: "react-mymoney-b5fd3.firebaseapp.com",
  projectId: "react-mymoney-b5fd3",
  storageBucket: "react-mymoney-b5fd3.appspot.com",
  messagingSenderId: "407986758745",
  appId: "1:407986758745:web:484ae7f3720b1ee48a7d48"
};

// init firebase app
const firebase = initializeApp(firebaseConfig)

// init services
const projectFirestore = getFirestore(firebase)
const projectAuth = getAuth(firebase)
const projectStorage = getStorage(firebase)

export { projectFirestore, projectAuth, projectStorage }