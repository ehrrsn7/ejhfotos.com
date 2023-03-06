import React from "react"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { Sidebar } from "../components/Sidebar"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Spray.css"

export function Spray() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.sprayStatus)
   }, [])

   return <div id="Spray" className="Page">
      <Sidebar />
      <div style={{ width: "100%" }}>
         <Header>
            Spray
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