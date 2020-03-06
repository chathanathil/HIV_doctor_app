import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDwtt9G4plPmaD7HMFrA4P9yJAnGacIW_0",
  authDomain: "hostel-manager-fcee6.firebaseapp.com",
  databaseURL: "https://hostel-manager-fcee6.firebaseio.com",
  projectId: "hostel-manager-fcee6",
  storageBucket: "hostel-manager-fcee6.appspot.com",
  messagingSenderId: "824077992221",
  appId: "1:824077992221:web:ba46b587b3725e8db021f4",
  measurementId: "G-ZKHY2W6Q2M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
