import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDSrI4MqCp1EvQ1pHqGPhKpXBO7wGcpJvw",
  authDomain: "todoist-clone-a2bfc.firebaseapp.com",
  projectId: "todoist-clone-a2bfc",
  storageBucket: "todoist-clone-a2bfc.appspot.com",
  messagingSenderId: "1075817865639",
  appId: "1:1075817865639:web:09961b4c459a9971621682",
});

export { firebaseConfig as firebase };
