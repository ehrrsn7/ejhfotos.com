import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { post } from "../firebase"
import { Header, TaskTable } from "../components"
import { dummyRows } from "../components/TaskTable/TaskTable"
import "./Dashboard.css"

export function Dashboard() {
   const { setFilterFunction } = React.useContext(Context)
   const { setSortedBy } = React.useContext(Context)

   const [ showAddMore, setShowAddMore ] = React.useState(false)

   React.useEffect(() => {
      setFilterFunction(() => row => row)
      setSortedBy("Status")
   }, [])

   return <span id="Dashboard Page">
      <Header>
         Dashboard
      </Header>
      <div id="Content">
         <TaskTable
         showHighPriority
         showStatus
         showLastModified
         showUpdate 
         />

         <span style={{
            placeContent: "space-between",
            marginTop: "1em",
            gap: "1em",
            maxWidth: 1000,
         }}>
            <button onClick={() => post("tasks", dummyRows[Math.floor(Math.random() * 5)])}>
               <h5>
                  Add task
               </h5>
            </button>

            <button onClick={() => setShowAddMore(!showAddMore) }>
               <h5>
                  { showAddMore ? "Hide Add More" : "Add More" }
               </h5>
            </button>

            <Link to="/CompletedParts">
               <button>
                  <h5>
                     Completed Parts
                  </h5>
               </button>
            </Link>

            <Link to="/DiscardedParts">
               <button>
                  <h5>
                     Discarded Parts
                  </h5>
               </button>
            </Link>

            <Link to="/Stamp">
               <button>
                  <h5>
                     Stamp →
                  </h5>
               </button>
            </Link>
         </span>


         { showAddMore && <>
            <div id="AddMore" style={{
               display: "flex",
               flexFlow: "column",
               padding: "1em",
               width: "calc(100% - 2em)",
               marginTop: "1em",
               borderRadius: "1em",
               boxShadow: "0 0 5px lightgray"
            }}>
               <table style={{
                  borderSpacing: "none"
               }}>
                  <thead>
                     <tr>
                        <td>
                           <h3>
                              Add More
                           </h3>
                        </td>
                        <td>
                           <h3>
                              Add More
                           </h3>
                        </td>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <p>
                              <input style={{
                                 all: "unset",
                                 border: "1px solid lightgray",
                                 borderRadius: "7px",
                              }} />
                           </p>
                        </td>
                        <td>
                           <p>
                              <input style={{
                                 all: "unset",
                                 border: "1px solid lightgray",
                                 borderRadius: "7px",
                              }} />
                           </p>
                        </td>
                        <td>
                           <p>
                              <input style={{
                                 all: "unset",
                                 border: "1px solid lightgray",
                                 borderRadius: "7px",
                              }} />
                           </p>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </> }
      </div>
   </span>
}