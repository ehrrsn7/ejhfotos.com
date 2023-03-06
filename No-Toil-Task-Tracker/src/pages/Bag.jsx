import React from "react"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { Sidebar } from "../components/Sidebar"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Bag.css"
import { Link } from "react-router-dom"

export function Bag() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.bagStatus)
   }, [])

   return <div id="Bag" className="Page">
      <Sidebar />
      <div style={{ width: "100%" }}>
         <Header>
            Bag
         </Header>
         <div className="Content">
            <TaskTable
            showHighPriority
            showLastModified
            showUpdate 
            />

            <span style={{
               placeContent: "space-between",
               marginTop: "1em"
            }}>
               <Link to="/">
                  <button>
                     Back to Dashboard
                  </button>
               </Link>

               <Link to="/CompletedParts">
                  <button>
                     Completed Parts
                  </button>
               </Link>
            </span>
         </div>
      </div>
   </div>
}