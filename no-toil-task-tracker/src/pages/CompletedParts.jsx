import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import { filterFunctions } from "../components/TaskTable/TaskTable"
import "./CompletedParts.css"

export function CompletedParts() {
   const { setFilterFunction } = React.useContext(Context)

   React.useEffect(() => {
      setFilterFunction(() => filterFunctions.completedPartsStatus)
   }, [])

   return <div id="CompletedParts Page">
      <Header>
         Completed Parts
      </Header>
      <div id="Content">
         <span>
            <div />
            <div style={{alignItems: "end", gap: "0.5em", marginBottom: "1em"}}>
               <button onClick={() => window.print()} style={{
                  width: "100px",
                  alignSelf: "right",
               }}>
                  Print
               </button>
               <button disabled style={{
                  width: "250px",
               }}>
                  Delete Completed Tasks
               </button>
            </div>
         </span>
         <TaskTable />
         <span style={{
            padding: 16, maxWidth: 1000
         }}>
            <Link to="/Bag"><button><h5>← Bag</h5></button></Link>
            <Link to="/"><button><h5>Back to Dashboard</h5></button></Link>
            <div />
         </span>
      </div>
   </div>
}