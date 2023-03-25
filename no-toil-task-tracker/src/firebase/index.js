// firebase
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import {
   getFirestore,
   onSnapshot,
   addDoc,
   collection,
   query,
   Timestamp
} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebaseConfig from "../private/firebaseConfig.json"

// Initialize Firebase (pass to FirebaseContext.Provider value)
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const analytics = getAnalytics(app)
export const db = getFirestore(app)

// helper functions
export async function post(collectionName="tasks", obj={}) {
   try {
      await addDoc(collection(db, collectionName), {
         ...obj,
         LastModified: Timestamp.fromDate(new Date()),
      })
      .then(() => {
         console.log("doc uploaded")
      })
   } catch (err) {
      console.error(err)
   }
}

export async function onFirestoreSnapshot(callback=()=>{}) {
   try {
      const ref = collection(db, "tasks")
      const q = query(ref)
      onSnapshot(q, callback, error => {throw error})
   }
   catch (err) {
      console.warn(err)
   }
}

export async function fetchTasks({tasks, setTasks}) {
   onFirestoreSnapshot(snapshot => {
      const newTasks = {...tasks}
      snapshot.forEach(doc => {
         newTasks[doc.id] = new Task({
            ...doc.data(),
            LastModified: doc.data().LastModified.toDate()
         })
      })
      // snapshot.docChanges().forEach(change => { console.log(change.type) })
      setTasks(newTasks)
   })
}

export class Task {
   constructor({
      id,
      Title,
      Quantity,
      Status,
      Description,
      LastModified,
      Oil,
      HighPriority,
      Discarded,
   }) {
      this.id = id
      this.Title = Title
      this.Quantity = Quantity
      this.Status = Status
      this.Description = Description
      this.LastModified = LastModified
      this.Oil = Oil
      this.HighPriority = HighPriority
      this.Discarded = Discarded
   }
}
