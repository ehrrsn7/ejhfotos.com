import React from "react"
import { Context } from "../contexts/context"
import { Sidebar, Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Spray.css"

export function Spray() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.sprayStatus)
   }, [])

   return <div id="Spray Page">
      <Header>
         Spray
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