// import
import React from "react"
import { changeDOMTitle } from "../scripts/dom-scripts"
import "./Home.css"

export default function Home() {
   React.useEffect(() => {
      changeDOMTitle(document, "Home")
   }, [])

   return <div id="Home" className="content">
      <header>
         <div>
            <div class="HeaderLogo">
               <h1>
                  Elijah Harrison Photography
               </h1>
            </div>
            <div class="NavBar">
               <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="http://about.ejhfotos.com/">About</a></li>
                  <li><a href="http://linktree.ejhfotos.com/">Linktree</a></li>
               </ul>
            </div>
         </div>
      </header>
      <main>
         <h1>Welcome!</h1>
         <p>This site is under construction. I hope to put a wonderful photography website here!</p>
         <p>Plan:</p>
         <ul>
            <li>
               <p>
                  <a>Home:</a>
                  This will be the main page. This will be the photography site. 
               </p>
            </li>
            <li>
               <p>
                  <a>About:</a>
                  This will be a landing page for everybody, including not only those who click the "about" link, but also potential employers who would like to clearly see my software portfolio, links and resume. 
               </p>
            </li>
            <li>
               <p>
                  <a>Linktree:</a>
                  Lightweight linktree.
               </p>
            </li>
         </ul>
      </main>
      <footer>
         <div class="MenuLists">
            <div class="MenuList">
               <div>
                  <h3>legal</h3>
                  <ul>
                     <li>terms of use</li>
                     <li>privacy policy</li>
                     <li>ads</li>
                     <li>do not sell or share my personal information</li>
                  </ul>
               </div>
               <div>
                  <h3>contact</h3>
                  <ul>
                     <li>subscribe</li>
                     <li>manage subscription</li>
                  </ul>
               </div>
            </div>
            <div class="MenuList">
               <div>
                  <h3>site map</h3>
                  <ul>
                     <li>home</li>
                     <li>linktree</li>
                     <li>about</li>
                  </ul>
               </div>
               <div>
                  <h3>follow me</h3>
                  <ul>
                     <li><a href="https://instagram.com/ejhfotos" target="_blank">IG @ejhfotos</a></li>
                     <li><a href="https://github.com/ehrrsn7" target="_blank">GH /ehrrsn7</a></li>
                     <li><a href="https://linkedin.com/in/ejhfotos" target="_blank">in /ejhfotos</a></li>
                     <li><a href="https://instagram.com/_swagmaster_james_" target="_blank">IG @_swagmaster_james_</a></li>
                     <li><a href="https://twitter.com/harriz_one" target="_blank">Tw @harriz_one</a></li>
                     <li><a href="https://snapchat.com/harriz_one" target="_blank">SC @harriz_one</a></li>
                     <li><a href="https://www.youtube.com/channel/UCnnnavIO_oJmW_LbXEEkmuQ" target="_blank">YT @swagmasterjames9695</a></li>
                     <li><a href="http://linktree.ejhfotos.com/" target="_blank">linktree</a></li>
                     <li><a href="http://about.ejhfotos.com/" target="_blank">about</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="IconRow">icon row</div>
      </footer>
   </div>
}
