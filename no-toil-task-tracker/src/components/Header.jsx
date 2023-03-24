import React from "react"
import * as ReactUse from "react-use"
import { Link } from "react-router-dom"
import { SidebarContext, ToggleSidebarButton } from "ehrrsn7-components"
import notoillogo from "../assets/notoil_logo.png"
import "./Header.css"

export function NoToilLogo({ style }) {
   const dark = ReactUse.useMedia("(prefers-color-scheme: dark)")
   return <Link to="https://notoil.com/" style={style}
   target="_blank" rel="noreferrer">
      <img src={notoillogo} height={60} alt="no toil logo"
         style={{ filter: dark && "brightness(0) invert(1)" }} />
   </Link>
}

export default function Header({children, style}) {
   const { showSidebar } = React.useContext(SidebarContext)
   
   const mobile = ReactUse.useMedia("(max-width: 450px)")
   const dark = ReactUse.useMedia("(prefers-color-scheme: dark)")
   const tiny = ReactUse.useMedia("(max-width: 315px)")
   
   const ref = React.useRef()

   return <header style={style} ref={ref}>
      {mobile ? <>
         {/* Mobile */}
         <div style={{
            textAlign: "center", 
            flexWrap: "wrap-reverse", 
            placeContent: "space-between", 
            width: tiny ? "100%" : "100vw",
         }}>
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
      </> : <>
         {/* Not Mobile */}
         <ToggleSidebarButton style={{ 
            opacity: showSidebar ? 0 : 1,
            position: "absolute",
            top: "1.2em",
            left: "1em"
         }} /> 
         <h2 className="Title" style={{
            margin: showSidebar ? "0 0 0 1em" : "0 0 0 2.5em"
         }}>
            {children}
         </h2>
         <span style={{
            placeContent: "end",
            placeItems: "center",
            color: dark ? "white" : "#505050"
         }}>
            <div>
               <Time />
               <h5 style={{letterSpacing: "1px", color: "green"}}>
                  Connected
               </h5>
            </div>
            <NoToilLogo style={{paddingTop: "6px"}} />
         </span>
      </>}
   </header>
}

function Time(props) {
   const [ time, setTime ] = React.useState(new Date())
   React.useEffect(() => {
      const interval = setInterval(() => {
         setTime(new Date())
      }, 1000)
      return () => clearInterval(interval)
   })
   return <>
      {time.toDateString()}<br />
      {time.toLocaleTimeString()}
   </>
}
