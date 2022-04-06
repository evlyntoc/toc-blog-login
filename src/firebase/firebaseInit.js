import firebase from "firebase/app";
import "firebase/firestore";



var firebaseConfig = {
    apiKey: "AIzaSyCixzk6vZCZ93nxtLt0b29zdPhxKRmS8lg",
    authDomain: "fireblogsyt-77362.firebaseapp.com",
    projectId: "fireblogsyt-77362",
    storageBucket: "fireblogsyt-77362.appspot.com",
    messagingSenderId: "310988728962",
    appId: "1:310988728962:web:6496a726fd42cd32e6629b"
  };
  
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();