import firebase from 'firebase'
import 'firebase/auth';


  const firebaseConfig = {
    apiKey: "AIzaSyCnf_KNZS63r5LteWjtnfqqcpGf-Qq4R4U",
    authDomain: "poppoov2.firebaseapp.com",
    projectId: "poppoov2",
    storageBucket: "poppoov2.appspot.com",
    messagingSenderId: "617452498932",
    appId: "1:617452498932:web:2619633c246b972f5a53a1",
    databaseURL:"https://poppoov2-default-rtdb.firebaseio.com/"
  };


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const ROOT_REF ='/users'
export const RIDES ='/rides'
export const USER_RIDES ='/user-rides'
export {firebase};