// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC2nTAfVqJHMDSbdoECLmFJ8soja0G8jDM",
  authDomain: "yt-react-firebase.firebaseapp.com",
  projectId: "yt-react-firebase",
  storageBucket: "yt-react-firebase.appspot.com",
  messagingSenderId: "87030735506",
  appId: "1:87030735506:web:36cfe1d5f5b09218eebc4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firebase = getFirestore(app)
