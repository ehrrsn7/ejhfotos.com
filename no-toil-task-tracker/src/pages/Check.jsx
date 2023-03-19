import React from "react"
import { Context } from "../contexts/context"
import { Sidebar, Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Check.css"

export function Check() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.checkStatus)
   }, [])

   return <div id="Check Page">
      <Header>
         Check
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