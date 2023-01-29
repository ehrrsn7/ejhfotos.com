// import
import React from "react"

// firebase
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = require("./private/firebaseConfig.json")

// Initialize Firebase (pass to FirebaseContext.Provider value)
export const firebase = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebase)

// create context and provider
const FirebaseContext = React.createContext()

export function useFirebase() {
   const firebaseContext = React.useContext(FirebaseContext)
   if (!firebaseContext)
      throw "useFirebase must be used within a FirebaseContext.Provider"
   return firebaseContext
}

export default FirebaseContext

// helper functions
export async function postToFirestore(firestore, whichCollection, obj) {
   /* 
    usage: 
    import { Timestamp } from "firebase/firestore"
    postToFirestore(firestore, "tasks", {
      title: "hi! new new tasks here",
      description: "new new tasks",
      completed: true,
      created: Timestamp.now()
    })
    */
   try {
      await addDoc(collection(firestore, whichCollection), obj)
   } catch (err) {
      console.error(err)
   }
}

export async function queryFromFirestore(firestore, whichCollection, setHook) {
   /* 
    usage:
    import { getFirestore } from "firebase/firestore"
    const firebase = useFirebase()
    const firestore = getFirestore(firebase)
    queryFromFirestore(firestore, "tasks", setTasks)
    // (where tasks is a [] hook)
    */
   try {
      const q = query(collection(firestore, whichCollection), orderBy("created", "desc"))
      onSnapshot(q, (querySnapshot) => {
         setHook(() => querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
         })))
      })
   } catch (err) {
      console.error(err)
   }
}
