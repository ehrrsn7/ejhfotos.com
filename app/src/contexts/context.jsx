import React from "react"

const Context = React.createContext()

export function ContextProvider({ children }) {
   const [ activeSidebar, setActiveSidebar, ] = React.useState(false)

   const value = { 
      activeSidebar, setActiveSidebar,
   }
 
   return (
      <Context.Provider value={value}>{children}</Context.Provider>
   )
}

export const useContext = () => React.useContext(Context)
