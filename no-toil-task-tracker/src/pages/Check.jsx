import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Check.css"

export function Check() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.checkStatus)
   }, [])

   return <div id="Check Page">
      <Header>
         Check
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
         <Link to="/Spray"><button><h5>← Spray</h5></button></Link>
         <Link to="/"><button><h5>Back to Dashboard</h5></button></Link>
         <Link to="/Oil"><button><h5>Oil →</h5></button></Link>
      </span>
   </div>
}