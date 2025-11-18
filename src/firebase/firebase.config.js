// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD97gMybOQrNK6rB45-myfhcdDspkyjkcU",
  authDomain: "toy-topia-9cd99.firebaseapp.com",
  projectId: "toy-topia-9cd99",
  storageBucket: "toy-topia-9cd99.firebasestorage.app",
  messagingSenderId: "700195097512",
  appId: "1:700195097512:web:decc1f8e075614a7a0eb9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app