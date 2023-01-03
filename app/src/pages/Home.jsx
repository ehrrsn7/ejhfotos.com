// import
import React from "react"
import { changeDOMTitle } from "../scripts/dom-scripts"
import "./Home.css"

export default function Home() {
   React.useEffect(() => {
      changeDOMTitle(document, "Home")
   }, [])

   return <div id="Home" className="content">
      <div className="page-width">
         <h1>
            Home Page
         </h1>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
         <p>content</p>
      </div>
   </div>
}
