
//when user firebase 9^ us have to use the compat else you dont need it
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAm0mSFR5wSKYU77nR_Pt8PsyGuYuJxGPg",
    authDomain: "vue-site-b5aaa.firebaseapp.com",
    projectId: "vue-site-b5aaa",
    storageBucket: "vue-site-b5aaa.appspot.com",
    messagingSenderId: "890399010946",
    appId: "1:890399010946:web:bebba95ed574ff62c0c49b"
  };

  // init firebase 
  firebase.initializeApp(firebaseConfig)

  //init firestore service 

  const projectFirestore = firebase.firestore()

  //fire base need need a certain type of time stamp so we importing it from fire base and then we'll be able to call it(timestamp()) when we would make a time stamp.
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore,timeStamp}