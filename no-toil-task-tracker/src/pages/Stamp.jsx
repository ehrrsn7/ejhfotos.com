import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable"
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
         <div />
         <Link to="/"><button><h5>Back to Dashboard</h5></button></Link>
         <Link to="/Spray"><button><h5>Spray →</h5></button></Link>
      </span>
   </div>
}