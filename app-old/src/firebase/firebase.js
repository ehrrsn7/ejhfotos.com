// firebase
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore, onSnapshot, addDoc, collection, query } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebaseConfig from "../private/firebaseConfig.json"

// Initialize Firebase (pass to FirebaseContext.Provider value)
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const analytics = getAnalytics(app)
export const db = getFirestore(app)

// helper functions
export async function post(collectionName, obj={}) {
   try {
      await addDoc(collection(db, collectionName), obj)
      .then(() => {
         console.log("doc uploaded")
      })
   } catch (err) {
      console.error(err)
   }
}

export async function onFirestoreSnapshot(collectionName="tasks", callback) {
   try {
      const ref = collection(db, collectionName)
      const q = query(ref)
      onSnapshot(q, callback)
      // hasPendingWrites can probably be a solution for the "connection established" state message
   } catch (err) {
      console.error(err)
   }
}
