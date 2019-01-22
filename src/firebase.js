import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCFhDtU99qw1UQeG0jUnvhamnTfKOVwktY",
    authDomain: "reddit-clone-vue-40751.firebaseapp.com",
    databaseURL: "https://reddit-clone-vue-40751.firebaseio.com",
    projectId: "reddit-clone-vue-40751",
    storageBucket: "reddit-clone-vue-40751.appspot.com",
    messagingSenderId: "835808534496"
  };
  firebase.initializeApp(config);

  export default firebase;