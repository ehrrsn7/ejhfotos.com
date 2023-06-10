import React from "react"
import { LayoutGroup, motion } from "framer-motion"
import { useInitializer, ErrorBoundary } from "ehrrsn7-components"
import { Context } from "@contexts"
<<<<<<< HEAD
import { objToArray, filterFunctions } from "@utils"
=======
import { objToArray, sortTasksBy, filterFunctions } from "@utils"
>>>>>>> 36bb42f4b07a060ec10a9401e1844e6ad8dd7215
import { SearchAndNavigateBar, AccordionRow, TaskRow } from "."
import "./TaskTable.css"
import { getSortFunction } from "../../utils"

export function TaskTable({
<<<<<<< HEAD
   setsOrQuantity, showStatus, showLastModified, showHighPriority, showUpdate, isPaginated, paginationRangeOverride, search, navigate, discarded
=======
   setsOrQuantity, showStatus, showLastModified, showHighPriority, showUpdate, paginated, paginationRangeOverride, search, navigate, discarded
>>>>>>> 36bb42f4b07a060ec10a9401e1844e6ad8dd7215
}) {
   const { tasks, setTasks } = React.useContext(Context)
   const { tasksLength } = React.useContext(Context)
   const { setFilterDiscarded } = React.useContext(Context)
   const { updateExpanded, setUpdateExpanded } = React.useContext(Context)
   const { sortedBy } = React.useContext(Context)
   const { searchState } = React.useContext(Context)
   const { filterFunction } = React.useContext(Context)
   const { filterDiscarded } = React.useContext(Context)
<<<<<<< HEAD
   const { paginated, setPaginated } = React.useContext(Context)
=======
>>>>>>> 36bb42f4b07a060ec10a9401e1844e6ad8dd7215
   const { paginationOffset } = React.useContext(Context)
   const { paginationRange, setPaginationRange } = React.useContext(Context)

   // helper functions
   const getTasks = () => {
      const discardedFilter = filterDiscarded ?
         filterFunctions.discardedPartsStatus :
         filterFunctions.notDiscardedPartsStatus
      const searchStateFilter = row =>
         row.Title.toLowerCase().includes(searchState.toLowerCase()) ||
         row.id.toLowerCase().includes(searchState.toLowerCase())
      const get = () => objToArray(tasks)
         .filter(filterFunction)
         .filter(searchStateFilter)
         .filter(discardedFilter)
<<<<<<< HEAD
         .sort(getSortFunction(sortedBy))
      if (paginated)
         return get()
            .slice(paginationOffset, paginationOffset + paginationRange)
      return get()
   }

   // handlers
=======
      if (paginated)
         return get()
            .slice(paginationOffset, paginationOffset + paginationRange)
      return get().filter(discardedFilter)
   }

   // handlers
   const handleTasksSorting = () => {
      try {
         if (!tasks) throw "tasks undefined"
         sortTasksBy({ tasks, setTasks }, sortedBy)
      }
      catch (err) { console.warn(err) }
   }

>>>>>>> 36bb42f4b07a060ec10a9401e1844e6ad8dd7215
   const handleDiscarded = () => {
      const newDiscarded = discarded || false
      setFilterDiscarded(newDiscarded)
   }

   const handlePaginationRangeOverride = () => {
      if (paginationRangeOverride)
         setPaginationRange(paginationRangeOverride)
   }

   // on change
   useInitializer(() => setPaginated(isPaginated))
   useInitializer(handlePaginationRangeOverride)
   useInitializer(handleDiscarded)
   useInitializer(handlePaginationRangeOverride)
   useInitializer(handleDiscarded)
   React.useEffect(handleTasksSorting, [ sortedBy, setTasks ])

   // component
   return <ErrorBoundary fallback={<div>
      Error loading TaskTable component.
   </div>}>
      <SearchAndNavigateBar navigate={navigate} search={search} />
   <table id="TaskTable">
      <thead>
         <TaskRow.Head
            setsOrQuantity={setsOrQuantity}
            showLastModified={showLastModified}
            showStatus={showStatus}
            showHighPriority={showHighPriority}
            setUpdateExpanded={setUpdateExpanded}
            showUpdate={showUpdate}
         />
      </thead>
      <tbody>
         {/* No Tasks */}
         { tasksLength <= 0 && 
            <motion.tr className="NoTasks">
               <td colSpan="100%">
                  <span>
                     <p>
                        <em>No Tasks</em>
                     </p>
                  </span>
               </td>
            </motion.tr>
         }

         {/* Tasks */}
         { getTasks()
            .map(row => <React.Fragment key={row.id}>
            <LayoutGroup initial={false}>
            <TaskRow.Body row={row}
               updateExpanded={updateExpanded}
               setUpdateExpanded={setUpdateExpanded}
               setsOrQuantity={setsOrQuantity}
               showLastModified={showLastModified}
               showStatus={showStatus}
               showHighPriority={showHighPriority}
               showUpdate={showUpdate}
            />

         {/* Accordion Row (in line with selected) */}
         { row.id == updateExpanded && <AccordionRow row={row} />}
         </LayoutGroup>
         </React.Fragment>) }

         <tr className="filler-row" />
      </tbody>
   </table>
   </ErrorBoundary>
}

export default TaskTable
