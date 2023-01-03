import { Link } from "react-router-dom"

import "./Header.css"

export default function Header() {
   return <div id="Header">
      <div className="page-width">
         <h1 className="fade-in">
            Elijah Harrison Photography
         </h1>

         <nav>
            <Link className="fade-in" to="/">Home</Link>
            <Link className="fade-in" to="/Albums">Albums</Link>
            <Link className="fade-in" to="/About">About</Link>
            <Link className="fade-in" to="/Portfolio">Portfolio</Link>
         </nav>
      </div>
   </div>
}