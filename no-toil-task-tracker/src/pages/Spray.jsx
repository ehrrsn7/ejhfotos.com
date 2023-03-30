import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
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
      <span style={{
         padding: 16, maxWidth: 1000
      }}>
         <Link to="/Stamp"><button><h5>← Stamp</h5></button></Link>
         <Link to="/"><button><h5>Back to Dashboard</h5></button></Link>
         <Link to="/Check"><button><h5>Check →</h5></button></Link>
      </span>
   </div>
}