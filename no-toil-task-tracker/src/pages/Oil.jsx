import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Oil.css"

export function Oil() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.oilStatus)
   }, [])

   return <div id="Oil Page">
      <Header>
         Oil
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
         <Link to="/Check"><button><h5>← Check</h5></button></Link>
         <Link to="/"><button><h5>Back to Dashboard</h5></button></Link>
         <Link to="/Bag"><button><h5>Bag →</h5></button></Link>
      </span>
   </div>
}