// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSCJHMCck06nwX6m_yiAZvcJxnAOD7bws",
  authDomain: "fir-test-e039d.firebaseapp.com",
  projectId: "fir-test-e039d",
  storageBucket: "fir-test-e039d.appspot.com",
  messagingSenderId: "660822828645",
  appId: "1:660822828645:web:6086f60c96fdbb04f3488c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
