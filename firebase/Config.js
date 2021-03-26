import firebase from 'firebase'
import 'firebase/auth';


const firebaseConfig={
    apiKey: "AIzaSyCx-iuwZ4Ze2UeAB20WWIFHdu4b32MU64k",
    authDomain: "fir-auth-exercise-1e950.firebaseapp.com",
    projectId: "fir-auth-exercise-1e950",
    databaseURL:"https://fir-auth-exercise-1e950-default-rtdb.firebaseio.com/",
    storageBucket: "fir-auth-exercise-1e950.appspot.com",
    messagingSenderId: "347199156087",
    appId: "1:347199156087:web:21f55c7bc5ffb6a9ca7b72"
}


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const ROOT_REF ='/users'
export {firebase};