const functions = require('firebase-functions');
const slug= require('slug-generator')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("primera funcion!");
});
exports.oncreateproduct= functions.firestore.document("productos/{producto_id}").onCreate((snap, context)=>{
    let newdata=snap.data()
    newdata.slug= slug(newdata.nombre) 
    return snap.ref.set(newdata)
})
