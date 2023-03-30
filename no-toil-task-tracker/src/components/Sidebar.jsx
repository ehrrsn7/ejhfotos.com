import React from "react"
import { Link } from "react-router-dom"
import { useMedia } from "react-use"
import { Sidebar as GlobalSidebar, SidebarContext, separateCamelCase } from "ehrrsn7-components"
import "./Sidebar.css"

export default function Sidebar() {
   const { showSidebar } = React.useContext(SidebarContext)
   const dark = useMedia("(prefers-color-scheme: dark)")

   return <GlobalSidebar closeButton style={{
      background: dark && "#20202090",
      boxShadow: !showSidebar && "none",
      padding: "1em", width: 200,
   }}>
      <Link to="/">
         <h2>No Toil<br />Task Tracker</h2><br />
      </Link>

      <SidebarLink to="/TestUI">
         TestUI
      </SidebarLink>

      {[ "Spray", "Check", "Oil", "Bag",
         "CompletedParts", "DiscardedParts",
      ].map(name => <SidebarLink to={name} key={name}>
         {separateCamelCase(name)}
      </SidebarLink>)}

   </GlobalSidebar>
}

const SidebarLink = ({ to, children }) => to ? <div 
style={{ marginBottom: "1em" }}>
   <Link to={to}>
      <button>
         <h4> {children} </h4>
      </button>
   </Link>
</div> :
<div>Invalid Link 'to' ({to})</div>
