import React from "react"
import "./FakeAccordion.css"

export function FakeAccordion({title, children}) {
   const [show, setShow] = React.useState(false)

   const onClick = () => setShow(!show)

   return <div className="FakeAccordion">
      <div className="FakeAccordion-Title">
         <h3>{title}</h3>
         <button onClick={() => onClick()}>
            {!show ? "Show" : "Hide"}
         </button>
      </div>
      {show && <div>{children}</div>}
   </div>
}
