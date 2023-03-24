// import
import React from "react"
import { ErrorBoundary } from "."
import "./Header.css"

export function Header({children, style}) {
   return <header style={style}>
      <ErrorBoundary fallback={<>Error in Header...</>}>
         <div>
            {children}
         </div>
      </ErrorBoundary>
   </header>
}
