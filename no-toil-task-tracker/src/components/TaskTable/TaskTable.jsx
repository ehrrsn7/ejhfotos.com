import React from "react"
import { Link } from "react-router-dom"
import * as ReactUse from "react-use"
import { LayoutGroup, motion } from "framer-motion"
import { Context } from "@contexts/context"
import { onFirestoreSnapshot } from "@src/firebase"
import { ErrorBoundary } from "../ErrorBoundary"
import { AccordionRow, motionVariants } from "./AccordionRow"
import "./TaskTable.css"

export function TaskTable({ setsOrQuantity, showStatus, showLastModified, showHighPriority, showUpdate }) {
   const { tasks, setTasks } = React.useContext(Context)
   const { filterFunction } = React.useContext(Context)
   const { sortedBy } = React.useContext(Context)
   const { updateExpanded, setUpdateExpanded } = React.useContext(Context)

   // * run once *
   const initialized = React.useRef(false)
   React.useEffect(() => {
      if (!initialized.current) {
         initialized.current = true

         // get tasks from firestore
         onFirestoreSnapshot(querySnapshot => {
            querySnapshot.forEach(row => {
               setTasks(arr => [...arr, {
                  ...row.data(),
                  id: row.id,
                  LastModified: row.data().LastModified?.toDate(),
               }])
            })
         }, "tasks")
      }
   })

   React.useEffect(() => {
      sortTasksBy({ tasks, setTasks }, sortedBy)
   }, [ sortedBy ])

   return <ErrorBoundary fallback={<div>
      Error loading TaskTable component.
   </div>}>
   <table id="TaskTable">
      <thead>
         <tr>
            <columns.Title.Head />

            <columns.Quantity.Head 
            setsOrQuantity={setsOrQuantity} />

            <columns.LastModified.Head
            showLastModified={showLastModified}/>

            <columns.Status.Head
            showStatus={showStatus} />

            <columns.HighPriority.Head
            showHighPriority={showHighPriority} />

            <columns.Update.Head setUpdateExpanded={setUpdateExpanded} showUpdate={showUpdate} />
         </tr>
      </thead>
      <tbody>
         {/* No Tasks */}
         { tasks.filter(filterFunction).length <= 0 && <motion.tr
         className="NoTasks">
            <td colSpan="100%">
               <span>
                  <p>
                     <em>No Tasks</em>
                  </p>
               </span>
            </td>
         </motion.tr>}

         {/* Tasks */}
         { tasks.filter(filterFunction).map(row => <React.Fragment key={row.id}>
         <LayoutGroup initial={false}>
         <motion.tr
         initial="hidden"
         animate="show"
         variants={motionVariants.container}
         >
            <columns.Title.Body>
               {row.Title}
            </columns.Title.Body>

            <columns.Quantity.Body
            setsOrQuantity={setsOrQuantity}>
               {row.Quantity}
            </columns.Quantity.Body>

            <columns.LastModified.Body
            showLastModified={showLastModified} >
               {row.LastModified?.toDateString && row.LastModified?.toDateString()}
            </columns.LastModified.Body>

            <columns.Status.Body
            showStatus={showStatus}>
               <Link to={`/${statusMapNumberToName(row.Status)}`}>
                  <button style={{
                     padding: 0,
                     paddingLeft: "1em",
                     paddingRight: "1em",
                     paddingTop: "4px",
                     paddingBottom: "4px",
                     zIndex: 1
                  }}
                  onClick={e => e.preventDefault()}>
                     <h5>
                        {statusMapNumberToName(row.Status)}
                     </h5>
                  </button>
               </Link>
            </columns.Status.Body>

            <columns.HighPriority.Body
            showHighPriority={showHighPriority}>
               {row.HighPriority ? "!" : ''}
            </columns.HighPriority.Body>

            <columns.Update.Body row={row} showUpdate={showUpdate} />
         </motion.tr>

         {/* Accordion Row (in line with selected) */}
         { row.id == updateExpanded && <AccordionRow row={row} />}
         </LayoutGroup>
         </React.Fragment>) }
      </tbody>
   </table>
   </ErrorBoundary>
}

const columns = {
   TableHead: ({ children, style, id }) => {
      const { sortedBy, setSortedBy } = React.useContext(Context)
      const onClick = () => setSortedByCallback({ sortedBy, setSortedBy }, id)
   
      return <td id={id} onClick={onClick}
      className={sortedBy.includes(id) ? "sortedBy" : ""}>
         <span style={{
            textAlign: "center",
            placeContent: "center",
            ...style
         }}>
            <h4>{children}</h4>
            &ensp;
            { sortedBy.includes(id) && <p style={{
               transform: sortedBy.includes("Ascending") ? 
                  "rotate(-90deg)" : 
                  "rotate(90deg)",
               width: 30,
               height: 30,
               textAlign: "center",
               verticalAlign: "center",
               borderRadius: 30,
            }}>›</p> }
         </span>
      </td>
   },

   Title: {
      Head: () => <columns.TableHead id="Title" style={{
         textAlign: "left",
         placeContent: "left"
      }}>
         Title
      </columns.TableHead>,
   
      Body: ({children}) => <td>
         <p>{children}</p>
      </td>
   },

   Quantity: {
      Head: ({ setsOrQuantity }) => <columns.TableHead id="Quantity" style={{
         minWidth: 120
      }}>
         Quantity
         {setsOrQuantity}
      </columns.TableHead>,
   
      Body: ({ children, setsOrQuantity }) => {
         const quantity = children
         return <td className="Quantity">
            <p>{ (setsOrQuantity) ? quantity : quantity / 18 }</p>
         </td>
      }
   },

   LastModified: {
      Head: ({ showLastModified }) => {
         const mobile = ReactUse.useMedia("(max-width: 650px)")

         return !mobile && showLastModified && <columns.TableHead id="LastModified" style={{
            minWidth: 140
         }}>
            Last Modified
         </columns.TableHead>
      },
   
      Body: ({ children, showLastModified }) => {
         const mobile = ReactUse.useMedia("(max-width: 650px)")

         return !mobile && showLastModified && <td className="LastModified" style={{
            minWidth: 150
         }}>
            <p>{children}</p>
         </td>
      }
   },

   Status: {
      Head: ({ showStatus }) => {
         const mobile = ReactUse.useMedia("(max-width: 650px)")

         return !mobile && showStatus && <columns.TableHead id="Status" style={{
            minWidth: 90
         }}>
            Status
         </columns.TableHead>
      },
   
      Body: ({ children, showStatus }) => {
         const mobile = ReactUse.useMedia("(max-width: 650px)")

         return !mobile && showStatus && <td className="Status">
            <p>{children}</p>
         </td>
      }
   },

   HighPriority: {
      Head: ({ showHighPriority }) => {
         const mobile = ReactUse.useMedia("(max-width: 650px)")

         return !mobile && showHighPriority && <columns.TableHead id="HighPriority" style={{
            minWidth: 45
         }}>
            !
         </columns.TableHead>
      },
   
      Body: ({ children, showHighPriority }) => {
         const mobile = ReactUse.useMedia("(max-width: 650px)")

         return !mobile && showHighPriority && <td className="HighPriority">
            <p>{children}</p>
         </td>
      }
   },

   Update: {
      Head: ({ showUpdate }) => {
         const { setUpdateExpanded } = React.useContext(Context)
         const onClick = () => setUpdateExpanded('')
         return showUpdate && <td id="Update" onClick={onClick}>
            <h4>Update</h4>
         </td>
      },
   
      Body: ({ row, showUpdate }) => {
         const { updateExpanded, setUpdateExpanded } = React.useContext(Context)

         const update = () => {
            console.log("update", row.id)
         }
   
         const rotate = () => {
            setUpdateExpanded(row.id == updateExpanded ? '' : row.id)
         }
   
         return showUpdate && <td className="Update">
            <button onClick={update}>
               {"✓"}
            </button>
            <button onClick={rotate} style={{
               transform: (updateExpanded == row.id) ? "rotate(0)" : "rotate(90deg)",
            }}>
               {"∨"}
            </button>
         </td>
      }
   }
}

/**************************************************
 * ROWS
 **************************************************/
export const dummyRows = [
   {
      id: "a120",
      Title: "3117",
      Quantity: 54,
      Status: 3,
      Oil: true,
      HighPriority: true,
      Discarded: false,
   },
   {
      id: "a121",
      Title: "5555",
      Quantity: 36,
      Status: 2,
      Oil: true,
      HighPriority: false,
      Discarded: false,
   },
   {
      id: "a122",
      Title: "4444",
      Quantity: 18,
      Status: 5,
      Oil: true,
      HighPriority: false,
      Discarded: false,
   },
   {
      id: "a123",
      Title: "3333",
      Quantity: 36,
      Status: 3,
      Oil: true,
      HighPriority: true,
      Discarded: false,
   },
   {
      id: "a124",
      Title: "2222",
      Quantity: 36,
      Status: 3,
      Oil: true,
      HighPriority: false,
      Discarded: false,
   },
]

/**************************************************
 * Helper Functions
 **************************************************/
export function statusMapNameToNumber(name) {
   switch (name.toLowerCase()) {
      case "stamp": return 0
      case "spray": return 1
      case "check": return 2
      case "oil": return 3
      case "bag": return 4
      case "completedparts": return 5
      case "discardedparts": return 6
      default: throw new Error(
         `In statusMapNameToNumber(name): unknown case '${name}'`
      )
   }
}
export function statusMapNumberToName(number) {
   switch (number) {
      case 0: return "Stamp"
      case 1: return "Spray"
      case 2: return "Check"
      case 3: return "Oil"
      case 4: return "Bag"
      case 5: return "CompletedParts"
      case 6: return "DiscardedParts"
      default: throw new Error(
         `In statusMapNumberToName(number): unknown case '${number}'`
      )
   }
}

const setSortedByCallback = ({ sortedBy, setSortedBy }, by="") => {
   if (sortedBy == '')
      setSortedBy(`${by}-Descending`)
   else if (sortedBy == `${by}-Descending`)
      setSortedBy(`${by}-Ascending`)
   else
      setSortedBy('')
}

const sortFunctions = {
   id: {
      ascending: (a, b) => a.id.localeCompare(b.id),
      descending: (a, b) => b.id.localeCompare(a.id),
   },
   Title: {
      ascending: (a, b) => a.Title.localeCompare(b.Title),
      descending: (a, b) => b.Title.localeCompare(a.Title),
   },
   Quantity: {
      ascending: (a, b) => a.Quantity - b.Quantity,
      descending: (a, b) => b.Quantity - a.Quantity,
   },
   Oil: {
      ascending: (a, b) => a.Oil - b.Oil,
      descending: (a, b) => b.Oil - a.Oil,
   },
   HighPriority: {
      ascending: (a, b) => a.HighPriority - b.HighPriority,
      descending: (a, b) => b.HighPriority - a.HighPriority,
   },
   Status: {
      ascending: (a, b) => a.Status - b.Status,
      descending: (a, b) => b.Status - a.Status,
   },
   Discarded: {
      ascending: (a, b) => a.Discarded - b.Discarded,
      descending: (a, b) => b.Discarded - a.Discarded,
   },
   LastModified: {
      ascending: (a, b) => a.LastModified - b.LastModified,
      descending: (a, b) => b.LastModified - a.LastModified,
   },
}

export const filterFunctions = {
   stampStatus: row => row.Status == 0,
   sprayStatus: row => row.Status == 1,
   checkStatus: row => row.Status == 2,
   oilStatus: row => row.Status == 3,
   bagStatus: row => row.Status == 4,
   completedPartsStatus: row => row.Status == 5,
   discardedPartsStatus: row => row.Status == 6,
}

const sortTasksBy = ({ tasks, setTasks }, by) => {
   // skip if nothing to sort (fixes some bugs)
   if (!tasks.length) return
   
   // default: "id-Ascending"
   by = by == '' ? "id-Ascending" : by
   
   const sortFunction = {
      "id-Ascending":
         sortFunctions.id.ascending,
      "id-Descending":
         sortFunctions.id.descending,
      "Title-Ascending":
         sortFunctions.Title.ascending,
      "Title-Descending":
         sortFunctions.Title.descending,
      "Quantity-Ascending":
         sortFunctions.Quantity.ascending,
      "Quantity-Descending":
         sortFunctions.Quantity.descending,
      "Oil-Ascending":
         sortFunctions.Oil.ascending,
      "Oil-Descending":
         sortFunctions.Oil.descending,
      "HighPriority-Ascending":
         sortFunctions.HighPriority.ascending,
      "HighPriority-Descending":
         sortFunctions.HighPriority.descending,
      "Status-Ascending":
         sortFunctions.Status.ascending,
      "Status-Descending":
         sortFunctions.Status.descending,
      "Discarded-Ascending":
         sortFunctions.Discarded.ascending,
      "Discarded-Descending":
         sortFunctions.Discarded.descending,
      "LastModified-Ascending":
         sortFunctions.LastModified.ascending,
      "LastModified-Descending":
         sortFunctions.LastModified.descending,
   }[by]

   setTasks(tasks.sort(sortFunction))
}
