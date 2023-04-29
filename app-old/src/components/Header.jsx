// idea: animate show/hide header on scroll! :)
// see https://codesandbox.io/s/yfhtk?file=/src/nav.js



// import
import React from "react"
import { Link } from "react-router-dom"

// dependencies
import { Pivot as Hamburger } from "hamburger-react"

// components
import Sidebar from "./Sidebar"

// hooks
import * as ReactUse from "react-use"

// assets
import "./Header.css"

// define
function ActionBar({className, children}) {
   let cname = "ActionBar" + ((className) && (' ' + className))
   try {
      return <span className={cname}>
         {children}
      </span>
   }
   catch {
      return <>error in ActionBar</>
   }
}

export default function Header({image, children}) {
   const mobile = ReactUse.useMedia("(max-width: 767px)")

   const [ activeSidebar, setActiveSidebar ] = React.useState(false)

   React.useEffect(() => {
      document.querySelector("header").style.backgroundImage = `url("${image}")`
   }, [image])

   try {
      return <header>
         <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
         <ActionBar className="no-wrap">
            <span>
               {mobile && <p></p>}
               {mobile || <p><Link to="/">Home</Link></p>}
               {mobile || <p><Link to="/Portfolio">Portfolio</Link></p>}
               {mobile || <p><Link to="/About">About</Link></p>}
               {mobile || <p><Link to="/"></Link></p>}
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
               {mobile || <p><Link to=""></Link></p>}
               {mobile || <p><Link to="/Engagements">Engagements</Link></p>}
               {mobile || <p><Link to="/Weddings">Weddings</Link></p>}
               {mobile || 
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
               {mobile && 
                  <div className={`hamburger-react-wrapper${activeSidebar ? " activeSidebar" : ""}`}>
                     <Hamburger 
                        toggle={setActiveSidebar} 
                        toggled={activeSidebar} 
                     />
                  </div>
               }
            </span>
         </ActionBar>
         <div>
            {children}
         </div>
      </header>
   }
   catch {
      return <p>error in header</p>
   }  
}
