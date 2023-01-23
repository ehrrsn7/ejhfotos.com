// import
import React from "react"
import { Link } from "react-router-dom"

// functions
import { changeDOMTitle } from "../scripts/dom-scripts"

// components
import Header from "../components/Header"
import Footer from "../components/Footer"

// assets
import "./Home.css"

export default function Home() {
   React.useEffect(() => {
      changeDOMTitle(document, "Home")
   }, [])

   return <div id="Home" className="content">
      <Header />
      <main>
         <h1>Welcome!</h1>
         <p>This site is under construction. I hope to put a wonderful photography website here!</p>
         <p>Plan:</p> 
         <ul>
            <li>
               <p>
                  <Link to="/">Home:</Link>{' '}
                  This will be the main page. This will be the photography site. 
               </p>
            </li>
            <li>
               <p>
                  <Link to="/">About:</Link>{' '}
                  This will be a landing page for everybody, including not only those who click the "about" link, but also potential employers who would like to clearly see my software portfolio, links and resume. 
               </p>
            </li>
            <li>
               <p>
                  <Link to="/">Linktree:</Link>{' '}
                  Lightweight linktree.
               </p>
            </li>
         </ul>
      </main>
      <Footer />
   </div>
}
