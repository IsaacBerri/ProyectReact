import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-flFdfhJXdQjtkRkHyRbEtcByv0YzevI",
  authDomain: "protecto-react.firebaseapp.com",
  projectId: "protecto-react",
  storageBucket: "protecto-react.appspot.com",
  messagingSenderId: "348105337580",
  appId: "1:348105337580:web:814c38e2be3f8fccf713c9",
  measurementId: "G-Z8SPYS1XP0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)