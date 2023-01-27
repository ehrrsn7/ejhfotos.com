// import
import React from "react"
import { Link } from "react-router-dom"

// dependencies
import { Pivot as Hamburger } from "hamburger-react"
import useMediaQuery from "../hooks/useMediaQuery"
import { keydownEvent } from "../scripts/dom-scripts"

// assets
import "./Sidebar.css"

// define
const MenuItem = ({to, children}) => {
   if (!to) {
      return <div className="menu-item">{children}</div>
   }

   if (to[0] === '/') {
      return <Link to={to} className="menu-item">
         <p>
            {children}
         </p>
      </Link>
   }

   return <a href={to} target="_blank" className="menu-item">
      <p>
         {children}
      </p>
   </a>
}

export default function Sidebar({activeSidebar, setActiveSidebar}) {
   React.useEffect(() => {
      // on click outside of sidebar: close sidebar
      // document.addEventListener('click', (event) => {
      //    const s = document.querySelector("#Sidebar")
      //    const h = document.querySelector(".hamburger-react-wrapper")
      //    console.log({
      //       "sidebar clicked": s.contains(event.target),
      //       "toggle clicked": h.contains(event.target),
      //       target: event.target,
      //    })

      //    if (!activeSidebar) return
      //    if (s.contains(event.target)) return
      //    if (h.contains(event.target)) return

      //    setActiveSidebar(activeSidebar => !activeSidebar)
      // })

      if (activeSidebar) {
         keydownEvent(
            "Escape",
            () => {
               setActiveSidebar(() => false)
            }
         )
      }
   })

   return (useMediaQuery("(min-width: 767px)")) ? <></> : 
   <div id="Sidebar" className={activeSidebar ? "activeSidebar" : ""}>
      <div>
         <Hamburger 
            className={activeSidebar ? "activeSidebar" : ""} 
            toggle={setActiveSidebar} 
            toggled={activeSidebar} 
         />
         <MenuItem to="/">
            Home
         </MenuItem>
         <MenuItem to="/Portfolio">
            Portfolio
         </MenuItem>
         <MenuItem to="/Engagements">
            Engagements
         </MenuItem>
         <MenuItem to="/Weddings">
            Weddings
         </MenuItem>
         <MenuItem to="/Maternal">
            Maternal
         </MenuItem>
         <MenuItem to="/Intimates">
            Intimates
         </MenuItem>
         <MenuItem to="/Contact">
            Contact
         </MenuItem>
         <MenuItem to="/Blog">
            Blog
         </MenuItem>
         <MenuItem to="http://about.ejhfotos.com/">
            About
         </MenuItem>
         <MenuItem to="http://linktree.ejhfotos.com/">
            Linktree
         </MenuItem>
         <br></br>
      </div>
   </div>
}
