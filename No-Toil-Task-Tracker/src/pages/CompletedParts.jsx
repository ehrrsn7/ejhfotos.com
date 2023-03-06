import React from "react"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { Sidebar } from "../components/Sidebar"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./CompletedParts.css"

export function CompletedParts() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.completedPartsStatus)
   }, [])

   return <div id="CompletedParts" className="Page">
      <Sidebar />
      <div style={{ width: "100%" }}>
         <Header>
            Completed Parts
         </Header>
         <div className="Content">
            <TaskTable />
         </div>
      </div>
   </div>
}