import { Link } from "react-router-dom"

import "./Footer.css"

export default function Footer() {
   return <footer>
      <div className="MenuLists">
         <div className="MenuList">
            <h3>legal</h3>
            <ul>
               <li>terms of use</li>
               <li>privacy policy</li>
               <li>ads</li>
               <li>do not share my information</li>
            </ul>
         </div>
         <div className="MenuList">
            <h3>contact</h3>
            <ul>
               <li>subscribe</li>
               <li>manage subscription</li>
            </ul>
         </div>
         <div className="MenuList">
            <h3>site map</h3>
            <ul>
               <li>home</li>
               <li>linktree</li>
               <li>about</li>
            </ul>
         </div>
         <div className="MenuList">
            <h3>follow me</h3>
            <ul>
               <li><Link to="https://instagram.com/ejhfotos">IG @ejhfotos</Link></li>
               <li><Link to="https://github.com/ehrrsn7">GH /ehrrsn7</Link></li>
               <li><Link to="https://linkedin.com/in/ejhfotos">in /ejhfotos</Link></li>
               <li><Link to="https://instagram.com/_swagmaster_james_">IG @_swagmaster_james_</Link></li>
               <li><Link to="https://twitter.com/harriz_one">Tw @harriz_one</Link></li>
               <li><Link to="https://snapchat.com/harriz_one">SC @harriz_one</Link></li>
               <li><Link to="https://www.youtube.com/channel/UCnnnavIO_oJmW_LbXEEkmuQ">YT @swagmasterjames9695</Link></li>
               <li><Link to="http://linktree.ejhfotos.com/">linktree</Link></li>
               <li><Link to="http://about.ejhfotos.com/">about</Link></li>
            </ul>
         </div>
      </div>
      <div className="IconRow">icon row</div>
   </footer >
}