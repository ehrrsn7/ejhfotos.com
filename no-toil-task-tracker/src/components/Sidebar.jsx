import React from "react"
import { Link } from "react-router-dom"
import { useMedia } from "react-use"
import { Sidebar as GlobalSidebar, SidebarContext } from "ehrrsn7-components"
import "./Sidebar.css"

export default function Sidebar() {
   const dark = useMedia("(prefers-color-scheme: dark)")
   const { showSidebar } = React.useContext(SidebarContext)
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

      <SidebarLink to="/Spray">
         Spray
      </SidebarLink>

      <SidebarLink to="/Check">
         Check
      </SidebarLink>

      <SidebarLink to="/Oil">
         Oil
      </SidebarLink>

      <SidebarLink to="/Bag">
         Bag
      </SidebarLink>

      <SidebarLink to="/CompletedParts">
         Completed Parts
      </SidebarLink>

      <SidebarLink to="/DiscardedParts">
         Discarded Parts
      </SidebarLink>
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
