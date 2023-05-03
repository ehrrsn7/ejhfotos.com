import React from "react"
import { ErrorBoundary } from ".."
import "./Footer.css"

export function BackToTopButton() {
   const onClick = () => { window["scrollTo"]({ top: 0, behavior: "smooth" }) }
   return <button className="BackToTopButton" onClick={onClick}>{"∧"}</button>
}

export function Footer({id, className, style, children}) {
   const fallback = () => <>Error in Footer component.</>
   return <footer id={id} className={className} style={style}>
      <ErrorBoundary fallback={fallback}>
         <div>{children}</div>
         <span className="IconRow">
            <p>Site Icon</p>
            <p>Copyrights</p>
            <BackToTopButton />
         </span>
      </ErrorBoundary>
   </footer >
}

export default Footer
