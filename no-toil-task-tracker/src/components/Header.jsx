import React from "react"
import * as ReactUse from "react-use"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import notoillogo from "../assets/notoil_logo.png"
import "./Header.css"

export function ToggleSidebarButton() {
   const { openSidebar, setOpenSidebar } = React.useContext(Context)

   return <button
   style={{
      opacity: openSidebar ? 0 : 1,
      cursor: openSidebar ? "default" : "pointer",
   }}
   onClick={() => setOpenSidebar(!openSidebar)}>
      <a>
         {"☰"}
      </a>
   </button>
}

export function NoToilLogo() {
   return <Link to="https://notoil.com/" target="_blank" rel="noreferrer">
      <button style={{all: "unset"}}>
         <img src={notoillogo} width="95" alt="no toil logo" />
      </button>
   </Link>
}

export default function Header({children, style}) {
   const mobile = ReactUse.useMedia("(max-width: 450px)")
   return <header style={{
      placeContent: "space-between",
      padding: 0,
      paddingTop: "1em",
      paddingBottom: "1em",
      width: "100vw",
      height: "fit-content",
      ...style
   }}>
      {mobile ? <>
         <div style={{textAlign: "center"}}>
            <span style={{
               placeContent: "space-between",
               width: "100vw",
            }}>
               <ToggleSidebarButton />
               <NoToilLogo />
            </span>
            <span style={{
               placeContent: "center",
               textAlign: "center"
            }}>
               {children}
            </span>
         </div>
      </> : <>
         <ToggleSidebarButton />
         {children}
         <NoToilLogo />
      </>}
   </header>
}
