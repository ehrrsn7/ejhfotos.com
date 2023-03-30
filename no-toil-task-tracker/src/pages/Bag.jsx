import React from "react"
import { Link } from "react-router-dom"
import { separateCamelCase } from "ehrrsn7-components"
import { Header, TaskTable } from "../components"
import { Context } from "../contexts/context"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./Bag.css"

export function Bag() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.bagStatus)
   }, [])

   return <div id="Bag Page">
      <Header>
         Bag
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
         <Link to="/Oil"><button><h5>← Oil</h5></button></Link>
         <Link to="/"><button><h5>Back to Dashboard</h5></button></Link>
         <Link to="/CompletedParts"><button><h5>{separateCamelCase("CompletedParts")} →</h5></button></Link>
      </span>
   </div>
}