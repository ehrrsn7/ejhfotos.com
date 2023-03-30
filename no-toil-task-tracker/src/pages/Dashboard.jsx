import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../contexts/context"
import { Header, TaskTable } from "../components"
import "./Dashboard.css"
import { separateCamelCase } from "ehrrsn7-components"

export function Dashboard() {
   const { setFilterFunction } = React.useContext(Context)
   const { setSortedBy } = React.useContext(Context)

   const [ showAddTask, setShowAddTask ] = React.useState(false)

   React.useEffect(() => {
      setFilterFunction(() => row => row)
      setSortedBy("Status")
   }, [])

   return <span id="Dashboard Page">
      <Header>
         Dashboard
      </Header>
      <div id="Content">
         <TaskTable
         showHighPriority
         showStatus
         showLastModified
         showUpdate 
         />

         <span style={{
            placeContent: "space-between",
            marginTop: "1em",
            gap: "1em",
            maxWidth: 1000,
         }}>
            <button onClick={() => setShowAddTask(!showAddTask)}>
               <h5>
                  {showAddTask ? "Hide Add Task" : "Add Task"}
               </h5>
            </button>
            
            <Link to="/CompletedParts">
               <button><h5>{separateCamelCase("CompletedParts")}</h5></button>
            </Link>

            <Link to="/DiscardedParts">
               <button><h5>{separateCamelCase("DiscardedParts")}</h5></button>
            </Link>

            <Link to="/Stamp">
               <button><h5> Stamp → </h5></button>
            </Link>
         </span>

         { showAddTask && <AddMore /> }
      </div>
   </span>
}

function AddMore() {
   const containerRef = React.useRef()

   const onSubmit = event => {
      event.preventDefault()
      const obj = {}
      containerRef.current.querySelectorAll("span").forEach(element => {
         const key = element.querySelector(".key").innerHTML
         let val = element.querySelector(".val").value
         const type = element.querySelector(".val").type

         switch (type) {
            case "datetime-local":
               val = new Date(val)
               break
            case "number":
               val = parseInt(val)
               break
            case "checkbox":
               val = element.querySelector(".val").checked
               break
         }

         obj[key] = val
      })
      console.log(obj)
   }

   return <form id="AddMore">
      <div ref={containerRef}>
         <span>
            <h3 className="key">Title</h3>
            <input className="val" />
         </span>
         <span>
            <h3 className="key">Quantity</h3>
            <input className="val" type="number" />
         </span>
         <span>
            <h3 className="key">Last Modified</h3>
            <input className="val" type="datetime-local" />
         </span>
         <span>
            <h3 className="key">Oil</h3>
            <input className="val" type="checkbox" />
         </span>
         <span>
            <h3 className="key">High Priority</h3>
            <input className="val" type="checkbox" />
         </span>
         <span>
            <h3 className="key">Discarded</h3>
            <input className="val" type="checkbox" />
         </span>
         <button type="submit" onClick={onSubmit} onSubmit={onSubmit}>
            Post
         </button>
      </div>
   </form>
}
