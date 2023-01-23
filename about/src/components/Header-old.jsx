import { Link } from "react-router-dom"

import "./Header.css"

export default function Header() {
   return <header>
      <div>
         <div class="HeaderLogo">
            <h1>
               Elijah Harrison Photography
            </h1>
         </div>
         <div class="NavBar">
            <ul>
               <li>
                  <h3>
                     <Link to="/">
                        Home
                     </Link>
                  </h3>
               </li>
               <li>
                  <h3>
                     <a href="http://about.ejhfotos.com/" target="_blank">
                        About
                     </a>
                  </h3>
               </li>
               <li>
                  <h3>
                     <a href="http://linktree.ejhfotos.com/" target="_blank">
                        Linktree
                     </a>
                  </h3>
               </li>
            </ul>
         </div>
      </div>
   </header>
}