import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCAVdYZg8kdetzYefWmkmuVLnbbGgA8yxg",
    authDomain: "fema-mobile-grupo-3.firebaseapp.com",
    projectId: "fema-mobile-grupo-3",
    storageBucket: "fema-mobile-grupo-3.appspot.com",
    messagingSenderId: "802953738691",
    appId: "1:802953738691:web:2dcff3061f52d71b402576"
  };
  // Initialize Firebase
if(firebase.apps.length  === 0){
  Firebase =  firebase.initializeApp(firebaseConfig);
}
export default Firebase;