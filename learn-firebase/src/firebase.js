// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //authentication 설정(사용자인증)
import { getFirestore } from "firebase/firestore"; //Firestore 설정
import { getStorage } from "firebase/storage"; //storage 설정
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
const app = initializeApp(firebaseConfig); //처음에 잘 연결됐나 확인만 하면 돼
export const auth = getAuth(app); //authentication 설정(사용자인증)
export const db = getFirestore(app); //Firestore 설정
export const storage = getStorage(app); //storage 설정
