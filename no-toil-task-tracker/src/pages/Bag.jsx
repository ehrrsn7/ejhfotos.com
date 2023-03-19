import React from "react"
import { Link } from "react-router-dom"
import { Header, TaskTable } from "../components"
import { Context } from "../contexts/context"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Bag.css"

export function Bag() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.bagStatus)
   }, [])

   return <div id="Bag Page">
      <Header>
         Bag
      </Header>
      <div id="Content">
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
}