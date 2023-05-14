import React from "react"
import { ErrorBoundary, useMedia } from ".."
import "./Footer.css"

export function BackToTopButton() {
   const onClick = () => { window["scrollTo"]({ top: 0, behavior: "smooth" }) }
   return <button className="BackToTopButton" onClick={onClick}>{"∧"}</button>
}

export function Footer({id, className, style, children}) {
   const tiny = useMedia("(max-width: 315px)")
   const fallback = () => <>Error in Footer component.</>

   return <footer id={id} className={className} style={{
      width: tiny ? "100%" : "100vw", ...style
   }}>
      <ErrorBoundary fallback={fallback}>
         {children}
      </ErrorBoundary>
   </footer >
}

export default Footer
