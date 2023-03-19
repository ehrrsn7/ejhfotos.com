import React from "react"
import "./Sidebar.css"

/************************************************************
 * React Components
 ************************************************************/
export function Sidebar({ children, style, closeButton }) {
   const { showSidebar } = React.useContext(SidebarContext)
   const { setSidebarMarginLeft } = React.useContext(SidebarContext)
   const { sidebarAbsoluteLeft, setSidebarAbsoluteLeft } = React.useContext(SidebarContext)

   React.useEffect(() => {
      setSidebarMarginLeft(!showSidebar ? 0 : getTotalSidebarWidth())
      setSidebarAbsoluteLeft(!showSidebar ? -getTotalSidebarWidth() : 0)
   }, [showSidebar])

   return <div id="Sidebar" style={{
      left: sidebarAbsoluteLeft,
      boxShadow: !showSidebar && "0 0 1em transparent",
      ...style,
   }}>
      {children}

      {closeButton && <ToggleSidebarButton style={{ 
         position: "absolute", top: "1em", right: "1em" 
      }} />}
   </div>
}

function MutateSidebarButton({ id, children, style, onClick }) {
   return <button className="MutateSidebarButton" id={id} 
   style={style} onClick={onClick}>
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

export function ToggleSidebarButton({ children, style, hi }) {
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

export function SidebarContextProvider({ children }) {
   const [ showSidebar, setShowSidebar ] = React.useState(false)
   
   const [ sidebarMarginLeft, setSidebarMarginLeft ] = React.useState(
      !showSidebar ? 0 : getTotalSidebarWidth()
   )

   const [ sidebarAbsoluteLeft, setSidebarAbsoluteLeft ] = React.useState(
      /* bug fix: instead of calculating the width, just have the value for the
       * sidebar left position be way off the side of the screen */
      !showSidebar ? -500 : 0 
   )

   const value = {
      showSidebar, setShowSidebar,
      sidebarMarginLeft, setSidebarMarginLeft,
      sidebarAbsoluteLeft, setSidebarAbsoluteLeft,
   }

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
   return Object.values(vals).reduce((a, b) => a + b, 0)
}
