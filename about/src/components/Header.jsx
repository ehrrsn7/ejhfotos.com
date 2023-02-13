import "./Header.css"
import useMediaQuery from "../hooks/useMediaQuery"
import { Pivot as Hamburger } from "hamburger-react"
import React from "react"

export default function Header() {
   const isMobile = useMediaQuery("(max-width: 767px)")

   return <header>
      <span>
         <span>
            {isMobile && <p></p>}
            {isMobile || <p>Home</p>}
            {isMobile || <p>Video</p>}
            {isMobile || <p>Photos</p>}
            {isMobile || <p></p>}
         </span>
         <p className="CursiveLogo">ejhfotos</p>
         <span>
            {isMobile || <p></p>}
            {isMobile || <p>Pricing</p>}
            {isMobile || <p>Contact</p>}
            {isMobile || <p>More</p>}
            {isMobile && <Hamburger />}
         </span>
      </span>
   </header>
}
