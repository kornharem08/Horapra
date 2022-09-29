import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
let firebaseConfig = {
  apiKey: 'AIzaSyB-HgVKluDaGvLjRbQ8XdO_V12WIeEhn78',
  authDomain: 'horapa-b6ee7.firebaseapp.com',
  projectId: 'horapa-b6ee7',
  storageBucket: 'horapa-b6ee7.appspot.com',
  messagingSenderId: '54992776228',
  appId: '1:54992776228:web:0efb3b33ef531af1247cb1',
  measurementId: 'G-4PF7NZFXK5'
}
// Initialize Firebase
let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(firebaseConfig)
}
// inject it so it can be accessed as this.$firebase inside the project
const storage = firebase.storage()
export default (ctx, inject) => {
  inject('firebase', firebase)
  inject('storage', storage)
//   inject('fireDb', fireDb)
}

// let app = null
// if (!firebase.apps.length) {
//   app = firebase.initializeApp(firebaseConfig)
// }
// const db = firebase.database()
// const storage = firebase.storage()
// const fireDb = firebase.firestore()

// export { firebase, fireDb, storage, db }
