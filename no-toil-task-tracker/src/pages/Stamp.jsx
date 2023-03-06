import React from "react"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { Sidebar } from "../components/Sidebar"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Stamp.css"

export function Stamp() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.stampStatus)
   }, [])

   return <div id="Stamp" className="Page">
      <Sidebar />
      <div style={{ width: "100%" }}>
         <Header>
            Stamp
         </Header>
         <div className="Content">
            <TaskTable
            showHighPriority
            showLastModified
            showUpdate 
            />
         </div>
      </div>
   </div>
}