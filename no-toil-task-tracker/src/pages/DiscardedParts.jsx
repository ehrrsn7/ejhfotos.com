import React from "react"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { Sidebar } from "../components/Sidebar"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./DiscardedParts.css"

export function DiscardedParts() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.discardedPartsStatus)
   }, [])

   return <div id="DiscardedParts" className="Page">
      <Sidebar />
      <div style={{ width: "100%" }}>
         <Header>
            <h2>
               Discarded Parts
            </h2>
         </Header>
         <div className="Content">
            <TaskTable />
         </div>
      </div>
   </div>
}