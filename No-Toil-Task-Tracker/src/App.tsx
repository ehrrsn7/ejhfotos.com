/**********
 * App.js
 **********/
// React Application
import React from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"

// Single-Page App Pages
import * as pages from "./pages"

// Single-Page App Page Components
import { Sidebar, Header } from "./components/pageComponents"

// Other Components
import { invalidRow } from "./components/tables/InvalidRow"

// Other (stylesheets/scripts/helper functions)
import "./App.css"
import { performSort } from "./data/sort"
import { useContext } from "./contexts/contextProvider"
import { initializeFirebaseDb, fetchFromFirestore } from "./contexts/firebaseProvider"
import { toast } from "react-toastify"

/**********
 * Define
 **********/
// Document Title Suffix
export const documentTitleSuffix = " | No Toil Task Tracker"

// // Django Rest Framework URI Endpoints
// export const todo_api_url =
//    `http://${window.location.hostname}/api/todo/`

// // Django Channels URI Endpoint/Connection
// export const websocket_uri = `ws://${window.location.host}/ws/api/`
// export const websocket = new WebSocket(websocket_uri)

// error 404 page
const PageNotFound = () => <div className="content">
   <div style={{padding: "1em", height: "15em"}}>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
   </div>
</div>

/**********************************************************************
 * Application
 **********************************************************************/
export default function App() {
   const context = useContext()
   const { activeSidebar, setActiveSidebar } = context
   const { todoModel, setTodoModel } = context

   /**********************************************************************
    * Initializer
    **********************************************************************/
   const initialized = React.useRef(false)
   React.useEffect(() => {
      if (!initialized.current) {
         initialized.current = true

         // // get data from tasklist api endpoint
         // fetch(todo_api_url)
         // .then(response => response.json())
         // .then(response => { 
         //    setTodoModel(response.filter(r => !r.discarded))
         //    setTodoDiscarded(response.filter(r => r.discarded))
         // })
         // .then(() => { console.log(
         //    "Successfully fetched data from", 
         //    todo_api_url
         // )}).catch(error => {
         //    console.log(error)
         //    setTodoModel([ invalidRow ])
         //    setTodoDiscarded([ invalidRow ])
         // })
           
         // key down events
         const onEscape = (event) => {
            if (event.code === "Escape" || event.isComposing) {
               console.log("esc key pressed")
               setActiveSidebar(false)
            }
         }; document.addEventListener("keydown", onEscape)
      }
   }, [ context ])

   /**********************************************************************
    * On Context Update
    **********************************************************************/
   React.useEffect(() => {
      console.log({"updated todo model": todoModel})
   }, [ todoModel ])

   React.useEffect(() => {
      // put general context update info here
   }, [ context ])
   
   /**********************************************************************
    * Firebase Tasks Constructor
    **********************************************************************/
   const firebaseInitialized = React.useRef(false)
   React.useEffect(() => {
      // firebase constructor
      if (!firebaseInitialized.current) {
         firebaseInitialized.current = true

         const firestoreDb = initializeFirebaseDb()

         // fetch tasks from firestore
         fetchFromFirestore(firestoreDb).then(tasks => {
            setTodoModel(tasks)
         })
      }
   })

   // /************************************************************
   //  * WEBSOCKETS
   //  ************************************************************/
   // // initialized
   // websocket.onopen = (event) => {
   //    console.log("Handshake:", new Date(), event)
      
   //    // update react hooks here so that we can use the data later
   //    setWsConnected(true)
   // }

   // // when 'set' react hook functions are successfully updated above
   // function onWsConnectedChange() {
   //    if (wsConnected) {
   //       // do stuff here
   //    }
   // }

   // // listen to react hook 'wsConnected'
   // React.useEffect(() => { onWsConnectedChange() }, [ wsConnected ])

   // // websocket (to get live updates from model)
   
   // websocket.onmessage = event => {
   //    if (context === undefined || todoModel === undefined) return
   //    const data = JSON.parse(event.data)
   //    const rowData = JSON.parse(event.data).rowData

   //    if (!data) throw new Error("'data' undefined")
   //    if (!(rowData && rowData.id)) throw new Error("invalid data.rowData")

   //    const notMatchesID = r => r.id !== rowData.id

   //    if (JSON.parse(event.data).type === "update/create") {
   //       console.log("from server: update/create", rowData)

   //       const insertAndSort = (arr, setArr) => {
   //          performSort(
   //             true, // descending
   //             sortedBy.replace("-descending", '').replace("-ascending", '') 
   //                || "title", 
   //             [...arr, rowData], 
   //             setArr
   //          )
   //       }

   //       if (rowData.discarded) {
   //          // remove row from todoModel and update/put in todoDiscarded
   //          setTodoModel(todoModel.filter(notMatchesID))
   //          insertAndSort(todoDiscarded.filter(notMatchesID), setTodoDiscarded)
   //       }

   //       else {
   //          // remove row from todoDiscarded and update/put in todoModel
   //          insertAndSort(todoModel.filter(notMatchesID), setTodoModel)
   //          setTodoDiscarded(todoDiscarded.filter(notMatchesID))
   //       } 

   //       return
   //    }

   //    if (data.type === "delete") {
   //       console.log("from server: delete", rowData)

   //       const discarded      = r => r.discarded
   //       const notDiscarded   = r => !r.discarded

   //       // remove from both todoModel and todoDiscarded if found
   //       setTodoModel(todoModel.filter(notDiscarded).filter(notMatchesID))
   //       setTodoDiscarded(todoDiscarded.filter(discarded).filter(notMatchesID))

   //       return
   //    }

   //    console.warn("unknown ws message type:", data.type)
   // }

   // websocket.onclose = (closeEvent) => {
   //    console.log("Websocket close:", closeEvent)
   //    setWsConnected(false)
   // }

   // websocket.onerror = (errorMessage) => {
   //    console.warn("Websocket warning:", errorMessage)
   // }
   
   /**********************************************************************
    * Render
    **********************************************************************/
   return <div id="App">
      <BrowserRouter>
         <Sidebar />
   
         <div id="nonSidebar" 
         className={activeSidebar ? "activeSidebar" : ""} 
         onClick={() => {
            // click outside #sidebar to hide it
            if (activeSidebar) setActiveSidebar(false)
         }}>
   
            <Header />

            {/* Content Div */}
            <div id="content">
               
               <Routes>
                  {/* Default: Dashboard */}
                  <Route path="/Dashboard" 
                  element={<pages.Dashboard />} />
                  
                  <Route path="/" 
                  element={<Navigate to="/Dashboard" />} />

                  {/* Tasks */}
                  <Route path="/Stamp" element={<pages.Stamp />} />
                  <Route path="/Spray" element={<pages.Spray />} />
                  <Route path="/Check" element={<pages.Check />} />
                  <Route path="/Oil"   element={<pages.Oil />}   />
                  <Route path="/Bag"   element={<pages.Bag />}   />

                  {/* Print Pages */}
                  <Route path="/CompletedParts" 
                  element={<pages.CompletedParts />} />
                  <Route path="/Complete" 
                  element={<Navigate to="/CompletedParts" />} />
                  <Route path="/Completed" 
                  element={<Navigate to="/CompletedParts" />} />
                  
                  <Route path="/DiscardedParts" 
                  element={<pages.DiscardedParts />} />
                  <Route path="/Discard" 
                  element={<Navigate to="/DiscardedParts" />} />
                  <Route path="/Discarded" 
                  element={<Navigate to="/DiscardedParts" />} />
                  <Route path="*" 
                  element={<PageNotFound />} />
                  
               </Routes>
            </div> {/* End Content Div */}
         </div> {/* End Non-Sidebar Div */}
      </BrowserRouter>
   </div> /* End Application Div */
}
