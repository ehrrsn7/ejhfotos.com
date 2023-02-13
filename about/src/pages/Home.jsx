// import
import React from "react"

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
         <p>
            If you followed this link in the browser, you have been rerouted to this page, <a href="http://about.ejhfotos.com/Minecraft">about.ejhfotos.com/Minecraft</a>.
         </p>

         <p>
            If you're not on my server, contact me to get whitelisted. Once you are, you can join by putting <a>minecraft.ejhfotos.com</a> as the IP. 
         </p>
      </main>
      <Footer />
   </div>
}
