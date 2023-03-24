import React from "react"
import { db } from "../firebase"
import { collection, query, onSnapshot } from "firebase/firestore"

export const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ tasks, setTasks ] = React.useState({})
   const [ sortedBy, setSortedBy ] = React.useState('')
   const [ filterFunction, setFilterFunction ] = React.useState(() => () => {})
   const [ updateExpanded, setUpdateExpanded ] = React.useState('')

   useInitializer(() => {
      try {
         const ref = collection(db, "tasks")
         const q = query(ref)
   
         const callback = snapshot => {
            const newTasks = {...tasks}
            snapshot.forEach(doc => {
               newTasks[doc.id] = {
                  ...doc.data(),
                  LastModified: doc.data().LastModified.toDate()
               }
            })
            snapshot.docChanges().forEach(change => {
               // console.log(change.type)
            })
            setTasks(newTasks)
         }
   
         onSnapshot(q, callback, error => {throw error})
      } catch (err) {
         console.error(err)
      }
   })

   const value = {
      tasks, setTasks,
      updateExpanded, setUpdateExpanded,
      filterFunction, setFilterFunction,
      sortedBy, setSortedBy,
   }
 
   return <Context.Provider value={value}>
      {children}
   </Context.Provider>
}

export function useInitializer(callback) {
   const mounted = React.useRef(false)

   React.useEffect(() => {
      try {
         // get tasks from firestore
         if (!mounted.current) {
            mounted.current = true
            return callback()
         }
      }
      catch (err) {
         console.warn(err)
      }
   }, [])

   return mounted
}
