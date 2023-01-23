import { Link } from "react-router-dom"

import logo from "../logo.svg"
import "./Header.css"

export default function Header() {
   return <header>
      <div>
         <ul className="inline-ul">
            <li>Home</li>
            <li>Video</li>
            <li>Photos</li>
         </ul>
         <p className="CursiveLogo">ejhfotos</p>
         <ul className="inline-ul">
            <li>Pricing</li>
            <li>Contact</li>
            <li>More</li>
         </ul>
      </div>
   </header>
}