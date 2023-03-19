import React from "react"
import { Context } from "../contexts/context"
import { Sidebar, Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./CompletedParts.css"

export function CompletedParts() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.completedPartsStatus)
   }, [])

   return <div id="CompletedParts Page">
      <Header>
         Completed Parts
      </Header>
      <div id="Content">
         <TaskTable />
         <span>
            <button>Hello</button>
            <button>Hello</button>
            <button>Hello</button>
            <button>Hello</button>
         </span>
      </div>
   </div>
}