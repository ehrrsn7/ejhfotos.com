import React from "react"
import { Context } from "../contexts/context"
import { Sidebar, Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Stamp.css"

export function Stamp() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.stampStatus)
   }, [])

   return <div id="Stamp Page">
      <Header>
         Stamp
      </Header>
      <div id="Content">
         <TaskTable
         showHighPriority
         showLastModified
         showUpdate 
         />
      </div>
      <span style={{
         padding: 16, maxWidth: 1000
      }}>
         <button><h5>hello</h5></button>
         <button><h5>hello</h5></button>
         <button><h5>hello</h5></button>
         <button><h5>hello</h5></button>
      </span>
   </div>
}