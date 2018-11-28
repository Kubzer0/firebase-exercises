import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDa1r8ZYtaRJxf2lQUXorbnynYov8U1gzY",
    authDomain: "poniedzialek-5c108.firebaseapp.com",
    databaseURL: "https://poniedzialek-5c108.firebaseio.com",
    projectId: "poniedzialek-5c108",
    storageBucket: "poniedzialek-5c108.appspot.com",
    messagingSenderId: "565385340536"
}
firebase.initializeApp(config)

export const database = firebase.database()