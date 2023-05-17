// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOgJ8BaLccvDT4mKBWGTbPM3Ac4zp07KU",
  authDomain: "machala-laundry-service.firebaseapp.com",
  projectId: "machala-laundry-service",
  storageBucket: "machala-laundry-service.appspot.com",
  messagingSenderId: "346236450495",
  appId: "1:346236450495:web:a8a5f316a42f2aec5bf80a",
  measurementId: "G-BPR2EJBRBM",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase();

export { app, db, ref, set };
