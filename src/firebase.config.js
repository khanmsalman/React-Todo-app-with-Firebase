import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBa1cfPpM0pdpGdw2sR_sJZr3Tdz8QM0Cw",
  authDomain: "reactcrudapp-ab36d.firebaseapp.com",
  databaseURL: "https://reactcrudapp-ab36d-default-rtdb.firebaseio.com",
  projectId: "reactcrudapp-ab36d",
  storageBucket: "reactcrudapp-ab36d.appspot.com",
  messagingSenderId: "1086402096418",
  appId: "1:1086402096418:web:2e20afe017aba6490c097b"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};