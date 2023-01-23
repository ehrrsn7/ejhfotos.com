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
                  <Link to="/">
                     Home
                  </Link>
               </li>
               <li>
                  <a href="http://about.ejhfotos.com/" target="_blank">
                     About
                  </a>
               </li>
               <li>
                  <a href="http://linktree.ejhfotos.com/" target="_blank">
                     Linktree
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </header>
}