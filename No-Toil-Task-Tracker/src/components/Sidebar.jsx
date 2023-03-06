import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import "./Sidebar.css"

const getCSSVariable = (selector, variable) => parseInt(
   getComputedStyle(
      document.querySelector(selector)
   ).getPropertyValue(variable).trim().replace(
      "px", ''
   )
)

const setCSSProperty = (selector, property, value) => {
   document.querySelector(selector).style.setProperty(property, value)
}

export function Sidebar() {
   const { openSidebar, setOpenSidebar } = React.useContext(Context)

   React.useEffect(() => {
      const listener = () => setOpenSidebar(false)
      const element = document.querySelector("#Dashboard > div:not(#Sidebar)")
      element?.addEventListener("click", listener)
      return removeEventListener(element, listener)
   })

   React.useEffect(() => {
      const sidebarWidth = getCSSVariable("#Sidebar", "--width")
      setCSSProperty("#Sidebar", "margin-left", openSidebar ? "0px" : `${-sidebarWidth - 32}px`)
   }, [ openSidebar ])

   return <div id="Sidebar">
      <span>
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