import React from "react"
import * as ReactUse from "react-use"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Context } from "../contexts/context"
import notoillogo from "../assets/notoil_logo.png"
import "./Header.css"

export function ToggleSidebarButton() {
   const { openSidebar, setOpenSidebar } = React.useContext(Context)

   return <button id="ToggleSidebarButton"
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
   const dark = ReactUse.useMedia("(prefers-color-scheme: dark)")
   return <Link to="https://notoil.com/" target="_blank" rel="noreferrer">
      <button style={{all: "unset"}}>
         <img src={notoillogo} width="95" alt="no toil logo"
         style={{ filter: dark && "brightness(0) invert(1)" }} />
      </button>
   </Link>
}

export default function Header({children, style}) {
   const { openSidebar } = React.useContext(Context)
   const mobile = ReactUse.useMedia("(max-width: 450px)")
   return <header style={style}>
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
               <h2 className="Title">
                  {children}
               </h2>
            </span>
         </div>
      </> : <>
         <motion.span
         variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delayChildren: 0.5
              }
            }
          }}>
            { !openSidebar && <motion.div
            variants={{
               hidden: { opacity: 0 },
               show: { opacity: 1 }
             }}>
               <ToggleSidebarButton /> 
            </motion.div> }
            <motion.div
            style={{all: "unset"}}
            >
               <h2 className="Title">
                  {children}
               </h2>
            </motion.div>
         </motion.span>
         <NoToilLogo />
      </>}
   </header>
}
