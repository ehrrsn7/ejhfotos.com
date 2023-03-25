import React from "react"
import { fetchTasks } from "../firebase"

export const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ tasks, setTasks ] = React.useState({})
   const [ sortedBy, setSortedBy ] = React.useState('')
   const [ filterFunction, setFilterFunction ] = React.useState(() => () => {})
   const [ updateExpanded, setUpdateExpanded ] = React.useState('')

   useInitializer(() => { fetchTasks({tasks, setTasks}) })

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
