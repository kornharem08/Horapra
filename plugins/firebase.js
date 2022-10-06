import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
let firebaseConfig = {
  apiKey: 'AIzaSyANj45zI-_V03-D-88Qv9o4UKZmehKj_vg',
  authDomain: 'botio-horapa.firebaseapp.com',
  projectId: 'botio-horapa',
  storageBucket: 'botio-horapa.appspot.com',
  messagingSenderId: '12680389108',
  appId: '1:12680389108:web:bd227a8ecbe7850398d9a1'
}
// Initialize Firebase
let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(firebaseConfig)
}
const storage = firebase.storage()
export default (ctx, inject) => {
  // inject('firebase', firebase)
  inject('storage', storage)
}
