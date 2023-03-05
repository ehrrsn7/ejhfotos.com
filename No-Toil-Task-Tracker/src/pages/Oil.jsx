import React from "react"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { Sidebar } from "../components/Sidebar"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Oil.css"

export function Oil() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.oilStatus)
   }, [])

   return <div id="Oil" className="Page">
      <Sidebar />
      <div style={{ width: "100%" }}>
         <Header>
            <h2>
               Oil
            </h2>
         </Header>
         <div className="Content">
            <TaskTable />
         </div>
      </div>
   </div>
}