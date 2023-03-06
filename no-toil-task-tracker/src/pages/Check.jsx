import React from "react"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { Sidebar } from "../components/Sidebar"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Check.css"

export function Check() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.checkStatus)
   }, [])

   return <div id="Check" className="Page">
      <Sidebar />
      <div style={{ width: "100%" }}>
         <Header>
            Check
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