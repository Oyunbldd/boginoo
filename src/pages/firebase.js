import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDPGnSzw-2qVq5Vypo2_7J_9dudJnsJ2Kg",
    authDomain: "boginoo-15065.firebaseapp.com",
    projectId: "boginoo-15065",
    storageBucket: "boginoo-15065.appspot.com",
    messagingSenderId: "217442644898",
    appId: "1:217442644898:web:edad070842b45212c338fb",
    measurementId: "G-EG1YJ05GXG"
});

let db = firebase.firestore()
let auth=firebase.auth()
let storage = firebase.storage().ref()


export {
    firebase, db,auth,storage
}

export const createDoc=(path,data)=>{
    console.log(path)
   firebase.firestore().doc(path).set({
       ...data
   })
}