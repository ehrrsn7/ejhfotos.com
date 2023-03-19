import React from "react"
import { Context } from "../contexts/context"
import { Sidebar, Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Oil.css"

export function Oil() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.oilStatus)
   }, [])

   return <div id="Oil Page">
      <Header>
         Oil
      </Header>
      <div id="Content">
         <TaskTable
         showHighPriority
         showLastModified
         showUpdate 
         />
      </div>
   </div>
}