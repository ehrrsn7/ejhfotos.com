import React from "react"
import "./Sidebar.css"
import { ErrorBoundary } from "./ErrorBoundary"

/************************************************************
 * React Components
 ************************************************************/
export function Sidebar({ style, children, closeButton }) {
   const context = React.useContext(SidebarContext)
   const { showSidebar } = React.useContext(SidebarContext)
   const { sidebarAbsoluteLeft } = React.useContext(SidebarContext)
   const { setSidebarMarginLeft } = React.useContext(SidebarContext)
   const { setSidebarAbsoluteLeft } = React.useContext(SidebarContext)

   React.useEffect(() => {
      try {
         if (!Object.keys(context).length) 
            throw "Context is undefined.\n\nDid you remember to wrap it in a SidebarContextProvider element?\n"

         setSidebarMarginLeft(showSidebar ? getTotalSidebarWidth() : 0)
         setSidebarAbsoluteLeft(showSidebar ? 0 : -getTotalSidebarWidth())
      }
      catch (err) { console.warn(err) }
   }, [showSidebar])
   
   return <ErrorBoundary
   fallback={<>fallback</>}>
   <div id="Sidebar" style={{ left: sidebarAbsoluteLeft, ...style }}>
      { children }
      { closeButton && <CloseSidebarButton style={{
         position: "absolute", top: "1em", right: "1em"
      }} /> }
   </div>
   </ErrorBoundary>
}

/**********************************************************************
 * Sidebar Change State Buttons
 **********************************************************************/
function MutateSidebarButton({ id, children, style, onClick }) {
   return <button style={style} id={id} onClick={onClick}
   className="MutateSidebarButton">
      <p> {children} </p>
   </button>
}

export function OpenSidebarButton({ children, style }) {
   const { setShowSidebar } = React.useContext(SidebarContext)

   return <MutateSidebarButton id="OpenSidebarButton" style={style} 
   onClick={() => setShowSidebar(true)}>
      {children ? children : "=" }
   </MutateSidebarButton>
}

export function CloseSidebarButton({ children, style }) {
   const { setShowSidebar } = React.useContext(SidebarContext)

   return <MutateSidebarButton id="CloseSidebarButton" style={style} 
   onClick={() => setShowSidebar(false)}>
      {children ? children : "×" }
   </MutateSidebarButton>
}

export function ToggleSidebarButton({ children, style }) {
   const { showSidebar, setShowSidebar } = React.useContext(SidebarContext)

   return <MutateSidebarButton id="ToggleSidebarButton" style={style}
   onClick={() => setShowSidebar(!showSidebar)}>
      {children ? children : showSidebar ? "×" : "=" }
   </MutateSidebarButton>
}

/************************************************************
 * Sidebar Context
 ************************************************************/
export const SidebarContext = React.createContext({})
let sidebarContextDefined = false // singleton implementation

const ContextProvider = {provider: undefined}

function CreateNewProvider({value, children}) {
   return <SidebarContext.Provider value={value}>
      { children }
   </SidebarContext.Provider>
}

export function SidebarContextProvider(props) {
   const { children } = props

   const [ showSidebar, setShowSidebar ] = React.useState(false)
   
   const [ sidebarMarginLeft, setSidebarMarginLeft ] = React.useState(
      !showSidebar ? 0 : getTotalSidebarWidth()
   )

   const [ sidebarAbsoluteLeft, setSidebarAbsoluteLeft ] = React.useState(
      /* bug fix: instead of calculating the width, just have the value 
       * for the sidebar left position be way off the side of the screen */
      !showSidebar ? -500 : 0 
   )

   const value = {
      showSidebar, setShowSidebar,
      sidebarMarginLeft, setSidebarMarginLeft,
      sidebarAbsoluteLeft, setSidebarAbsoluteLeft,
   }

   // singleton implementation
   // if (!sidebarContextDefined)
   //    [ sidebarContextDefined, ContextProvider.provider ] = [
   //       true,
   //       <CreateNewProvider value={value}>{ children }</CreateNewProvider>
   //    ]

   if (sidebarContextDefined)
      throw "Sidebar context is already defined. \n\n Don't nest SidebarContextProviders recursively. \n\n Several contexts will be created, causing bugs."
   
   return <SidebarContext.Provider value={value}>
      { children }
   </SidebarContext.Provider>
}

/************************************************************
 * Helper Functions
 ************************************************************/
export const getTotalSidebarWidth = () => {
   // get element
   const element = document.querySelector("#Sidebar")
   if (!element) return 0

   // get vals from computed styles of element
   const style = getComputedStyle(element)
   const vals = {
      width: style.width,
      marginLeft: style.marginLeft,
      marginRight: style.marginRight,
      paddingLeft: style.paddingLeft,
      paddingRight: style.paddingRight,
      borderLeftWidth: style.borderLeftWidth,
      borderRightWidth: style.borderRightWidth,
   }

   // parse str "...px" to ...(int) for all props
   for (const key in vals) 
   try { vals[key] = parseInt(vals[key].replace("px", '').trim()) }
   catch (err) {
      throw new Error("In getTotalSidebarWidth(): " + 
      `Error looping through ${vals} and ` + 
      `applying parseInt(.replace): ${err}`)
   }

   // calculate and return sum
   return (
      Object.values(vals).reduce((a, b) => a + b, 0) 
      + 1 // sometimes the browser rounds up or down incorrectly
   )
}
