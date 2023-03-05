import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import "./Sidebar.css"

const getCSSVariable = (selector, variable) => (
   parseInt(
      getComputedStyle(
         document.querySelector(selector)
      ).getPropertyValue(variable).trim().replace(
         "px", ''
      )
   )
)

export function Sidebar() {
   const { openSidebar, setOpenSidebar } = React.useContext(Context)
   const [ sidebarWidth, setSidebarWidth ] = React.useState("0")

   React.useEffect(() => {
      setSidebarWidth(-getCSSVariable("#Sidebar", "--width") - 32) // px

      const listener = () => setOpenSidebar(false)
      const element = document.querySelector("#Dashboard > div:not(#Sidebar)")
      element?.addEventListener("click", listener)
      return removeEventListener(element, listener)
   })

   return <div id="Sidebar" style={{
      marginLeft: openSidebar ? 0 : `${sidebarWidth}px`,
   }}>
      <span style={{ minWidth: sidebarWidth }}>
         <Link to="/Dashboard">
            <button>
               <h3>
                  No Toil <br />Task Tracker
               </h3>
            </button>
         </Link>
         <button onClick={() => setOpenSidebar(false)}>
            <a>
               &times;
            </a>
         </button>
      </span>
      <Link to="/Dashboard">
         <button>
            <h4>
               Dashboard
            </h4>
         </button>
      </Link>
      <Link to="/Stamp">
         <button>
            <h4>
               Stamp
            </h4>
         </button>
      </Link>
      <Link to="/Spray">
         <button>
            <h4>
               Spray
            </h4>
         </button>
      </Link>
      <Link to="/Check">
         <button>
            <h4>
               Check
            </h4>
         </button>
      </Link>
      <Link to="/Oil">
         <button>
            <h4>
               Oil
            </h4>
         </button>
      </Link>
      <Link to="/Bag">
         <button>
            <h4>
               Bag
            </h4>
         </button>
      </Link>
      <Link to="/CompletedParts">
         <button>
            <h4>
               Completed Parts
            </h4>
         </button>
      </Link>
      <Link to="/DiscardedParts">
         <button>
            <h4>
               Discarded Parts
            </h4>
         </button>
      </Link>
   </div>
}