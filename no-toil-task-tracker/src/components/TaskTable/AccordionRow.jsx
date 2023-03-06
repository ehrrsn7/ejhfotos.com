import React from "react"
import * as ReactUse from "react-use"
import { motion } from "framer-motion"
import "./AccordionRow.css"

export const motionVariants = {
   // this solved my issue with jitter-y accordion div animations
   // https://www.framer.com/motion/transition/
   item: {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
   }
}

export function AccordionRow({ row }) {
   const mobile = ReactUse.useMedia("max-width: 450px")

   return <motion.tr 
   variants={motionVariants.item} className="AccordionRow">
      <td colSpan="100%">
         <div className="AccordionDiv" style={{
            flexFlow: "row wrap",
            minHeight: "350px",
            alignItems: mobile ? "top" : "center",
            placeContent: "space-around",
         }}>
            <UpdateAccordionWidget row={row} />

            <AccordionWidget style={{
               paddingLeft: "1em", 
               paddingRight: "1em",
            }}>
               <h3 style={{textAlign: "center"}}>
                  More Info
               </h3>

               <ul style={{
                  listStyleType: "none",
                  padding: 0
               }}>
                  <li>
                     <span style={{display: "flex", placeContent: "space-between"}}>
                        <h3>id:</h3> &emsp; <p>{row.id}</p>
                     </span>
                  </li>
                  <li>
                     <span style={{display: "flex", placeContent: "space-between"}}>
                        <h3>Title:</h3> &emsp; <p>{row.Title}</p>
                     </span>
                  </li>
                  <li>
                     <span style={{display: "flex", placeContent: "space-between"}}>
                        <h3>Quantity:</h3> &emsp; <p>{row.Quantity}</p>
                     </span>
                  </li>
                  <li>
                     <span style={{display: "flex", placeContent: "space-between"}}>
                        <h3>Oil:</h3> &emsp; <p>{row.Oil ? "True" : "False"}</p>
                     </span>
                  </li>
                  <li>
                     <span style={{display: "flex", placeContent: "space-between"}}>
                        <h3>High Priority:</h3> &emsp; <p>{row.HighPriority ? "True" : "False"}</p>
                     </span>
                  </li>
                  <li>
                     <span style={{display: "flex", placeContent: "space-between"}}>
                        <h3>Discarded:</h3> &emsp; <p>{row.Discarded ? "True" : "False"}</p>
                     </span>
                  </li>
                  <li>
                     <span style={{
                        display: "flex",
                        flexFlow: "row wrap",
                        placeContent: "space-between",
                     }}>
                        <h3>Last Modified:</h3> &emsp; <p style={{
                           wordBreak: "break-word",
                           wordWrap: "break-word",
                           maxWidth: "150px",
                           textAlign: "right"
                        }}>{row.LastModified.toString()}</p>
                     </span>
                  </li>
               </ul>
            </AccordionWidget>

            <DiscardCertainAmountAccordionWidget row={row} />

            <AccordionWidget>
               <button>
                  Discard Task
               </button>
            </AccordionWidget>
         </div>
      </td>
   </motion.tr>
}

export function AccordionWidget({ children, style, className }) {
   return <div 
   className={`AccordionWidget${className ? ' ' + className : ''}`}>
      {children}
   </div>
}

export function UpdateAccordionWidget({ row }) {
   const [ quantity, setQuantity ] = React.useState(row.Quantity)

   return <AccordionWidget className="Update">
      <h3>
         Update '{row.Title}'
      </h3>
      <span style={{
         placeContent: "space-between"
      }}>
         <button style={{
            margin: ".5em",
            padding: ".5em",
            width: "2.5em",
            height: "2.5em",
            transition: ".3s",
         }} onClick={() => setQuantity(quantity - 1)}>
            -
         </button>

         <div style={{
            padding: "1em",
            placeContent: "center",
            placeItems: "space-between",
            textAlign: "center",
         }}>
            <h2 style={{
               textAlign: "center",
               padding: 0,
               margin: 0,
            }}>
               {quantity}
            </h2>
            <h4 style={{
               padding: 0,
               margin: 0,
            }}>
               Sets
            </h4>
         </div>

         <button style={{
            margin: ".5em",
            padding: ".5em",
            width: "2.5em",
            height: "2.5em",
            transition: ".3s",
         }} onClick={() => setQuantity(
            quantity <= row.Quantity ? quantity + 1 : quantity
         )}>
            +
         </button>
      </span>
      <button style={{
         padding: ".2em",
         transition: ".3s",
      }}>
         <p>
            Update Parts
         </p>
      </button>
   </AccordionWidget>
}

export function DiscardCertainAmountAccordionWidget({ row }) {
   const [ quantity, setQuantity ] = React.useState(0)

   return <AccordionWidget>
      <h3 style={{
         padding: 0,
         margin: 0,
         textAlign: "center"
      }}>
         Discard Parts
      </h3>
      <span style={{
         placeContent: "space-between"
      }}>
         <button style={{
            margin: ".5em",
            padding: ".5em",
            width: "2.5em",
            height: "2.5em",
            transition: ".3s",
         }} onClick={() => setQuantity(quantity - 1)}>
            -
         </button>

         <div style={{
            padding: "1em",
            placeContent: "center",
            placeItems: "space-between",
            textAlign: "center",
         }}>
            <h2 style={{
               textAlign: "center",
               padding: 0,
               margin: 0,
            }}>
               {quantity}
            </h2>
            <h4 style={{
               padding: 0,
               margin: 0,
            }}>
               Sets
            </h4>
         </div>

         <button style={{
            margin: ".5em",
            padding: ".5em",
            width: "2.5em",
            height: "2.5em",
            transition: ".3s",
         }} onClick={() => setQuantity(quantity <= row.Quantity ? quantity + 1 : quantity)}>
            +
         </button>
      </span>
      <button style={{
         padding: ".2em",
         transition: ".3s",
      }}>
         <p>
            Discard
         </p>
      </button>
   </AccordionWidget>
}
