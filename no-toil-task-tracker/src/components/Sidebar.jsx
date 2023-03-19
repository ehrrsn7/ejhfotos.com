import React from "react"
import { Link } from "react-router-dom"
import { Sidebar as GlobalSidebar } from "ehrrsn7-components"
import "./Sidebar.css"

export default function Sidebar() {
   return <GlobalSidebar closeButton style={{padding: "1em"}}>
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

const SidebarLink = ({ to, children }) => <div style={{marginBottom: "1em"}}>
   <a href={to}>
      <button>
         <h4> {children} </h4>
      </button>
   </a>
</div>
