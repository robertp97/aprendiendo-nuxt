import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'
var config = {
    apiKey: "AIzaSyBxIifkylHYEDqM2A-6Jffx_x0ZGl6DNfc",
    authDomain: "nuxt-ec3b4.firebaseapp.com",
    databaseURL: "https://nuxt-ec3b4.firebaseio.com",
    projectId: "nuxt-ec3b4",
    storageBucket: "nuxt-ec3b4.appspot.com",
    messagingSenderId: "676482658314"
  };
  if(!firebase.apps.length){
  firebase.initializeApp(config);
}
  const db=firebase.firestore()
  const storage= firebase.storage().ref()
  const auth =firebase.auth()
  export default firebase
  export{
    db, 
    storage,
    auth
  }