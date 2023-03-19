// import
import React from "react"
import { Link } from "react-router-dom"
import * as ReactUse from "react-use"
import { ErrorBoundary, SidebarContext } from "."
import "./Header.css"

export function Header({children}) {
   const isMobile = ReactUse.useMedia("(max-width: 767px)")

   const { showSidebar, setShowSidebar } = React.useContext(SidebarContext)

   return <header>
      <ErrorBoundary fallback={<div>
         Error in Header...
      </div>}>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <ActionBar className="no-wrap">
         <span>
            {isMobile && <p></p>}
            {isMobile || <p><Link to="/">Home</Link></p>}
            {isMobile || <p><Link to="/Portfolio">Portfolio</Link></p>}
            {isMobile || <p><Link to="/About">About</Link></p>}
            {isMobile || <p><Link to="/"></Link></p>}
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
            {isMobile || <p><Link to=""></Link></p>}
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
               <div className={`hamburger-react-wrapper${showSidebar ? " showSidebar" : ""}`}>
                  <Hamburger 
                     toggle={setShowSidebar} 
                     toggled={showSidebar} 
                  />
               </div>
            }
         </span>
      </ActionBar>
      <div>
         {children}
      </div>
      </ErrorBoundary>
   </header>
}

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
