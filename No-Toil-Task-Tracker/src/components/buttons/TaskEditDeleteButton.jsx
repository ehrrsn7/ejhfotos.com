import React            from "react"
import { Tooltip }      from "@mui/material"

export default function TaskEditDeleteButton(props) {
   const { id, style } = props

   return <button className="TaskEditDeleteButton" style={style}>
      <Tooltip title={"Note: this will lead you to the API (backend) " + 
      "application to permanently delete this task. This is not reversible " + 
      "-- only use for input typos, canceled orders, etc."}>

         <a href={id} target="_blank" rel="noreferrer">

            Edit / Delete Task
            
         </a>
      </Tooltip>
   </button>
}