import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig= {
    apiKey: "AIzaSyDs9vNUaB2_cmRkyrlMoBp5r51KR_HRt-Q",
    authDomain: "re-events-236319.firebaseapp.com",
    databaseURL: "https://re-events-236319.firebaseio.com",
    projectId: "re-events-236319",
    storageBucket: "re-events-236319.appspot.com",
    messagingSenderId: "162909981432"
}

firebase.initializeApp(firebaseConfig);


export default firebase;