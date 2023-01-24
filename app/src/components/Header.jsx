// import
import React from "react"
import { Link } from "react-router-dom"

// dependencies
import { Pivot as Hamburger } from "hamburger-react"

// components
import Sidebar from "./Sidebar"

// hooks
import useMediaQuery from "../hooks/useMediaQuery"

// assets
import "./Header.css"

export default function Header({image, children}) {
   const isMobile = useMediaQuery("(max-width: 767px)")

   const [ activeSidebar, setActiveSidebar ] = React.useState(false)

   React.useEffect(() => {
      document.querySelector("header").style.backgroundImage = `url("${image}")`
   }, [image])

   return <header>
      <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
      <span>
         <span>
            {isMobile && <p></p>}
            {isMobile || <p><Link to="/">Home</Link></p>}
            {isMobile || <p><Link to="/Portfolio">Portfolio</Link></p>}
            {isMobile || <p><Link to="/About">About</Link></p>}
            {isMobile || <p><Link></Link></p>}
         </span>
         <Link to="/">
            <div className="Logo">
               <h1 className="CursiveLogo">
                  ejhfotos
               </h1>
               <h1 className="translate-up">
                  E
               </h1>
            </div>
         </Link>
         <span>
            {isMobile || <p><Link></Link></p>}
            {isMobile || <p><Link to="/Engagements">Engagements</Link></p>}
            {isMobile || <p><Link to="/Weddings">Weddings</Link></p>}
            {isMobile || 
               <div className="HoverDropdownContainer">
                  <p className="HoverDropdownTrigger">
                     More
                  </p>
                  <div className="HoverDropdownContents">
                     <p><Link to="/Maternal">Maternal</Link></p>
                     <p><Link to="/Intimates">Intimates</Link></p>
                     <p><Link to="/Contact">Contact</Link></p>
                     <p><Link to="/Blog">Blog</Link></p>
                     <p><a href="http://linktree.ejhfotos.com/">Linktree</a></p>
                  </div>
               </div>
            }
            {isMobile && 
               <div className={`hamburger-react-wrapper${activeSidebar ? " activeSidebar" : ""}`}>
                  <Hamburger 
                     toggle={setActiveSidebar} 
                     toggled={activeSidebar} 
                  />
               </div>
            }
         </span>
      </span>
      <div>
         {children}
      </div>
   </header>
}
