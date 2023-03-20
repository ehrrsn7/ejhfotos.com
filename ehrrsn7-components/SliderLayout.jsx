import React from "react"
import "./SliderLayout.css"

export function SliderLayout({style, children}) {
   return <span className="SliderLayout" style={style}>
      {children}
   </span>
}

export function SliderCard({style, children}) {
   return <div className="SliderCard" style={style}>
      {children}
   </div>
}
