// import
import React from "react"
import { Link } from "react-router-dom"

// hooks/functions
import { toast } from "react-toastify"

// my functions
import { onFirestoreSnapshot } from "../firebase/firebase"
import { changeDOMTitle } from "../scripts/dom-scripts"

// components
import Header from "../components/Header"
import Footer from "../components/Footer"

// assets
import "./Home.css"

export function HomeImages() {
   const [ images, setImages ] = React.useState(0)

   React.useEffect(() => {
      let initialized = false

      // callback for firestore snapshot (webhook for db)
      console.log("setting home-images")
      onFirestoreSnapshot("home-images", 
         querySnapshot => {
            const newImages = []
            querySnapshot.forEach((doc) => {
               newImages.push({
                  id: doc.id,
                  ...doc.data()
               })
            })
            setImages(newImages)
         }
      )
      return () => {
         initialized = true
      }
   })

   React.useEffect(() => {
      const delay = .3 // s
      document.querySelectorAll("#row-images img").forEach((image, i) => {
         setTimeout(function () {
            image.classList.add("opaque")
        }, 1000 * delay * i)
      })
   }, [images])

   return <div id="row-images">
      {(images.map) && images?.map(image => <div key={image.subject}>
         <img src={image.url} alt={image.subject} />
         <div>
            <Link to={'/' + image.type} style={{
               color: "white",
               textDecoration: "none",
               textTransform: "capitalize",
            }}>
               <p>
                  {image.type}
               </p>
            </Link>
         </div>
      </div>)}
   </div>
}

export default function Home() {
   const initialized = React.useRef(false)
   React.useEffect(() => {
      // initializer
      if (!initialized.current) {
         initialized.current = true

         changeDOMTitle("Home | ejhfotos")
      }
   })

   return <div id="Home" className="content">
      <Header />

      <HomeImages />

      <main>
         <h1>Welcome!</h1>
         <p>This site is under construction. I hope to put a wonderful photography website here!</p>
         <p>Plan:</p> 
         <ul>
            <li>
               <p>
                  <a href="http://www.ejhfotos.com/">Home:</a>{' '}
                  This will be the main page, the photography site. 
               </p>
            </li>
            <li>
               <p>
                  <a href="http://about.ejhfotos.com/">About:</a>{' '}
                  This will be a landing page for everybody, including not only those who click the "about" link, but also potential employers who would like to clearly see my software portfolio, links and resume. 
               </p>
            </li>
            <li>
               <p>
                  <a href="http://linktree.ejhfotos.com/">Linktree:</a>{' '}
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
