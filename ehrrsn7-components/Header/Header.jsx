// import
import React from "react"
import { ErrorBoundary } from ".."
import "./Header.css"

export function Header({children, style}) {
   const tiny = useMedia("(max-width: 315px)")

   return <header style={{
      width: tiny ? "100%" : "100vw", ...style
   }}>
      <ErrorBoundary fallback={<>Error in Header...</>}>
         {children}
      </ErrorBoundary>
   </header>
}
