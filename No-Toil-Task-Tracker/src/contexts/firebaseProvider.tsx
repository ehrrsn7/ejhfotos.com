// import
import React from "react"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebaseConfig from "../private/firebaseConfig.json"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// helper functions
export function initializeFirebaseDb() {
   const app = initializeApp(firebaseConfig)
   const db = getFirestore(app)
   return db
}

export async function postToFirestore(db, col="collection", obj={}) {
   try {
      const docRef = await addDoc(collection(db, col), obj)
      console.log("Document written with ID: ", docRef.id)
   } catch (e) {
      console.error("Error adding document: ", e)
   }
}

export async function fetchFromFirestore(db) {
   try {
      let tasks : object[] = []
      const ref = collection(db, "tasks")
      await getDocs(ref).then(response => {
         response.forEach(element => {
            const task = element.data()
            task.lastModified = task.lastModified?.toDate()
            tasks.push({id: element.id, ...task})
         })
      })
      return tasks
   }
   catch (e) {
      console.error(e)
   }
}

export async function setEventCallback(db, col="collection", value="value", callback=() => {}) {
   // callback ex: (snap) => chats.push(snap.val())
   db.ref(col).on(value, snapshot => {
      snapshot.forEach(callback)
   })
}
