import React from "react"
import { Context } from "../contexts/context"
import { Sidebar, Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./DiscardedParts.css"

export function DiscardedParts() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.discardedPartsStatus)
   }, [])

   return <div id="DiscardedParts Page">
      <Header>
         Discarded Parts
      </Header>
      <div id="Content">
         <TaskTable />
      </div>
   </div>
}