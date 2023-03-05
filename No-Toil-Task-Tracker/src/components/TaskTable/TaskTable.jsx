import React from "react"
import { Link } from "react-router-dom"
import * as ReactUse from "react-use"
import { LayoutGroup, motion } from "framer-motion"
import { Context } from "../../contexts/context"
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
         console.log({ dummyRows })
         setTasks(dummyRows)
      }
   })

   React.useEffect(() => {
      sortTasksBy({ tasks, setTasks }, sortedBy)
   }, [ sortedBy ])

   React.useEffect(() => {
      console.log({ tasks })
   }, [ tasks ])

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
         { tasks.filter(filterFunction).length <= 0 && <motion.tr>
            <td colSpan="100%" style={{ height: 50, background: "whitesmoke" }}>
               <span>
                  <p>
                     <em>No Tasks</em>
                  </p>
               </span>
            </td>
         </motion.tr>}
         { tasks.filter(filterFunction).map(row => <React.Fragment key={row.id}>
         <LayoutGroup initial={false}>
         <motion.tr
         initial="hidden"
         animate="show"
         variants={motionVariants.container}
         onClick={() => {
            setUpdateExpanded(row.id == updateExpanded ? '' : row.id)
         }}
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
               {row.LastModified.toDateString()}
            </columns.LastModified.Body>

            <columns.Status.Body
            showStatus={showStatus}>
               <Link to={`/${statusMapNumberToName(row.Status)}`}>
                  <button style={{
                     height: "2.2em",
                     border: "1px solid gray"
                  }}>
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

            <columns.Update.Body row={row} />
         </motion.tr>
         { row.id == updateExpanded && <AccordionRow row={row} />}
         </LayoutGroup>
         </React.Fragment>) }
      </tbody>
   </table>
   </ErrorBoundary>
}

/**************************************************
 * COLUMNS
 **************************************************/
const columns = {
   TableHead: ({ children, style, id }) => {
      const { sortedBy, setSortedBy } = React.useContext(Context)
      const onClick = () => setSortedByCallback({ sortedBy, setSortedBy }, id)
   
      return <td id={id} style={style} onClick={onClick}
      className={sortedBy.includes(id) ? "sortedBy" : ""}>
         <h4>{children}</h4>
      </td>
   },

   Title: {
      Head: () => <columns.TableHead id="Title">
         Title
      </columns.TableHead>,
   
      Body: ({children}) => <td>
         <p>{children}</p>
      </td>
   },

   Quantity: {
      Head: ({ setsOrQuantity }) => <columns.TableHead id="Quantity">
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
            minWidth: 100
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

         return !mobile && showStatus && <columns.TableHead id="Status">
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

         return !mobile && showHighPriority && <columns.TableHead id="HighPriority">
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
      Head: () => <td id="Update">
         <h4>Update</h4>
      </td>,
   
      Body: ({ row }) => {
         const { updateExpanded, setUpdateExpanded } = React.useContext(Context)

         const update = () => {
            console.log("update", row.id)
         }
   
         const rotate = () => {
            setUpdateExpanded(row.id == updateExpanded ? '' : row.id)
         }
   
         return <td className="Update">
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
const dummyRows = [
   {
      id: "a120",
      Title: "3117",
      Quantity: 54,
      LastModified: new Date(),
      Status: 3,
      Oil: true,
      HighPriority: true,
      Discarded: false,
   },
   {
      id: "a121",
      Title: "5555",
      Quantity: 36,
      LastModified: new Date("2022-03-25"),
      Status: 2,
      Oil: true,
      HighPriority: false,
      Discarded: false,
   },
   {
      id: "a122",
      Title: "4444",
      Quantity: 18,
      LastModified: new Date("2022-03-25"),
      Status: 5,
      Oil: true,
      HighPriority: false,
      Discarded: false,
   },
   {
      id: "a123",
      Title: "3333",
      Quantity: 36,
      LastModified: new Date("October 13, 2014 11:13:00"),
      Status: 3,
      Oil: true,
      HighPriority: true,
      Discarded: false,
   },
   {
      id: "a124",
      Title: "2222",
      Quantity: 36,
      LastModified: new Date(2018, 11, 24, 10, 33, 30, 0),
      Status: 3,
      Oil: true,
      HighPriority: false,
      Discarded: false,
   },
]

/**************************************************
 * COLUMNS
 **************************************************/
function statusMapNumberToName(number) {
   switch (number) {
      case 0: return "Stamp"
      case 1: return "Spray"
      case 2: return "Check"
      case 3: return "Oil"
      case 4: return "Bag"
      case 5: return "CompletedParts"
      case 6: return "DiscardedParts"
      default: throw new Error(`In statusMapNumberToName(number): unknown case '${number}'`)
   }
}

const setSortedByCallback = ({ sortedBy, setSortedBy }, by="") => {
   setSortedBy(sortedBy == `${by}-Ascending` ? `${by}-Descending` : sortedBy == `${by}-Descending` ? '' : `${by}-Ascending`)
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

   console.log({"sorting": tasks, by, sortFunction, newTasks: tasks.sort(sortFunction)})
   
   setTasks(tasks.sort(sortFunction))
}
