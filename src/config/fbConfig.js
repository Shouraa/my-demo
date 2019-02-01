import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDyJ5j4dTVt8GYmbV8Tota0e-er7LLqovc",
  authDomain: "my-demo-63f8a.firebaseapp.com",
  databaseURL: "https://my-demo-63f8a.firebaseio.com",
  projectId: "my-demo-63f8a",
  storageBucket: "my-demo-63f8a.appspot.com",
  messagingSenderId: "555885319412"
};

firebase.initializeApp(config);

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
