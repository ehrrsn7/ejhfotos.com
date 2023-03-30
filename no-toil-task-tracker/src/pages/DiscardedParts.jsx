import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./DiscardedParts.css"

export function DiscardedParts() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.discardedPartsStatus)
   }, [])

   return <div id="DiscardedParts Page">
      <Header>
         Discarded Parts
      </Header>
      <div id="Content">
         <TaskTable />
      </div>
      <span style={{
         padding: 16, maxWidth: 1000
      }}>
         <div />
         <Link to="/"><button><h5>Back to Dashboard</h5></button></Link>
         <div />
      </span>
   </div>
}