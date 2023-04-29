import "./Footer.css"

export function BackToTopButton() {
   const onClick = () => { window[`scrollTo`]({ top: 0, behavior: `smooth` }) }
   return <button className="BackToTopButton" onClick={onClick}>{"∨"}</button>
}

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
               <li><a target="_blank" href="https://instagram.com/ejhfotos">IG @ejhfotos</a></li>
               <li><a target="_blank" href="https://github.com/ehrrsn7">GH /ehrrsn7</a></li>
               <li><a target="_blank" href="https://linkedin.com/in/ejhfotos">in /ejhfotos</a></li>
               <li><a target="_blank" href="https://instagram.com/_swagmaster_james_">IG @_swagmaster_james_</a></li>
               <li><a target="_blank" href="https://twitter.com/harriz_one">Tw @harriz_one</a></li>
               <li><a target="_blank" href="https://snapchat.com/harriz_one">SC @harriz_one</a></li>
               <li><a target="_blank" href="https://www.youtube.com/channel/UCnnnavIO_oJmW_LbXEEkmuQ">YT @swagmasterjames9695</a></li>
               <li><a target="_blank" href="http://linktree.ejhfotos.com/">linktree</a></li>
               <li><a target="_blank" href="http://about.ejhfotos.com/">about</a></li>
            </ul>
         </div>
      </div>
      <span className="IconRow">
         <p>Site Icon</p>
         <p>Copyrights</p>
         <BackToTopButton />
      </span>
   </footer >
}