import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig= {
    apiKey: "*********",
    authDomain: "re-events-236319.firebaseapp.com",
    databaseURL: "https://re-events-236319.firebaseio.com",
    projectId: "r*****",
    storageBucket: "re-eve******.com",
    messagingSenderId: "162***81432"
}

firebase.initializeApp(firebaseConfig);


export default firebase;