import React from "react"
import * as ReactUse from "react-use"
import { Link } from "react-router-dom"
import {
   SidebarContext, ToggleSidebarButton,
   Header as GlobalHeader, useInitializer
} from "ehrrsn7-components"
import { Context } from "../../contexts/context"
import logo from "../../assets/notoil_logo.png"
import "./Header.css"

export function Header({children, style}) {
   const mobile = ReactUse.useMedia("(max-width: 450px)")
   const tiny = ReactUse.useMedia("(max-width: 315px)")

   return <GlobalHeader style={{
      textAlign: "center", 
      flexWrap: "wrap-reverse", 
      placeContent: "space-between", 
      width: tiny ? "100%" : "100vw",
      ...style
   }}>
      {mobile ? <>
         {/* Mobile */}
         <components.Mobile children={children} />
      </> : <>
         <components.NotMobile children={children} />
      </>}
   </GlobalHeader>
}

const components = {
   Mobile: ({children}) => {
      const { showSidebar } = React.useContext(SidebarContext)
      const tiny = ReactUse.useMedia("(max-width: 315px)")

      return <div
      style={{width: tiny ? "100%" : "100vw"}}>
         <span>
            <ToggleSidebarButton style={{
               opacity: showSidebar ? 0 : 1,
               transition: "opacity 0.3s",
               margin: "1em"
            }} />
            <NoToilLogo />
         </span>
         <span style={{
            placeContent: "center",
            textAlign: "center"
         }}>
            <h2 className="Title" style={{
               margin: "0 0 1em 0"
            }}>
               {children}
            </h2>
         </span>
      </div>
   },

   NotMobile: ({ children }) => {
      const { showSidebar } = React.useContext(SidebarContext)
      const tablet = ReactUse.useMedia("(max-width: 650px)")
      const dark = ReactUse.useMedia("(prefers-color-scheme: dark)")

      return <span style={{flexWrap: "nowrap", width: "100vw"}}>
         <ToggleSidebarButton style={{ 
            opacity: showSidebar ? 0 : 1,
            position: "absolute",
            top: "1.2em",
            left: "1em"
         }} /> 
         <h2 className="Title" style={{
            marginLeft: showSidebar ? "1em" : "2.5em",
            marginTop: "auto",
            marginBottom: "auto",
            transition: "margin 0.3s",
            textAlign: "left"
         }}>
            {children}
         </h2>
         <span style={{
            placeContent: "end",
            placeItems: "center",
            flexWrap: "nowrap",
            color: dark ? "white" : "#505050"
         }}>
            { !tablet && <Status style={{ padding: "1em" }} /> }
            <NoToilLogo style={{paddingTop: "6px"}} />
         </span>
      </span>
   },
}

export function NoToilLogo({ style }) {
   const dark = ReactUse.useMedia("(prefers-color-scheme: dark)")
   return <Link to="https://notoil.com/" style={style}
   target="_blank" rel="noreferrer">
      <img src={logo} height={60} alt="no toil logo"
         style={{ filter: dark && "brightness(0) invert(1)" }} />
   </Link>
}

export const Time = () => {
   const [ time, setTime ] = React.useState(new Date())
   useInitializer(() => {
      const interval = setInterval(() => setTime(new Date()), 1000)
      return () => clearInterval(interval)
   })
   return <>
      { time.toDateString() }<br />
      { time.toLocaleTimeString() }<br />
   </>
}

export function Status({ style }) {
   const { connected } = React.useContext(Context)
   return <div style={{
      fontSize: "11px", marginTop: "auto", marginBottom: "auto",
      ...style
   }}>
      <Time />
      { connected ?
         <h4 style={{margin: 0, padding: 0, color: "green"}}>
            Connected
         </h4> :
         <h4 style={{margin: 0, padding: 0, color: "red"}}>
            Not Connected
         </h4>
       }
   </div>
}

export default Header
