import React from "react"

export const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ openSidebar, setOpenSidebar ] = React.useState(false)
   const [ tasks, setTasks ] = React.useState([])
   const [ sortedBy, setSortedBy ] = React.useState('')
   const [ filterFunction, setFilterFunction ] = React.useState(() => () => {})
   const [ updateExpanded, setUpdateExpanded ] = React.useState('')

   const value = { 
      tasks, setTasks,
      openSidebar, setOpenSidebar,
      updateExpanded, setUpdateExpanded,
      filterFunction, setFilterFunction,
      sortedBy, setSortedBy,
   }
 
   return <Context.Provider value={value}>
      {children}
   </Context.Provider>
}
