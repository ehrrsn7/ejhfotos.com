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
                  This will be the main page, the photography site. 
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

         {/* Template Items */}
         <h1>Template Items</h1>
         <p className="Subtitle">(Placeholders for the various components to be integrated in this site. Basically, "TODO" components.)</p>
         <br></br>

         <h2>[Welcome section]</h2>
         <br></br>

         <h2>[Hover Carrousel]</h2>
         <p className="Subtitle">(For preview of "weddings/engagements/other" images)</p>
         <br></br>

         <h2>[Check out our latest <em>"[]"</em>]</h2>
         <br></br>

         <h2>[Normal Album Carrousel]</h2>
         <br></br>

         <h2>[Normal Text with Button Sections]</h2>
         <br></br>

         <h2>[Text and Button with Background Image Sections]</h2>
         <br></br>

         <h2>[Testimonials Section with Text, Image and Arrow Buttons]</h2>
         <br></br>

         <h2>[Fixed image backgrounds to scroll over]</h2>
         <br></br>
      </main>
      <Footer />
   </div>
}
