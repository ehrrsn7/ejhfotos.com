import React from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Sidebar, Header, Footer, useInitializer, ToggleSidebarButton } from "ehrrsn7-components"
import "./App.css"

export function App() {
   useInitializer(() => {

   })

   return <div id="App">
      <Routes>
			<Route path="/" element={<div id="Content" className="Page">
            <Header style={{
               placeContent: "center",
               borderBottom: "1px solid whitesmoke"
            }}>
               <h1>Elijah Harrison</h1>
            </Header>
            <ToggleSidebarButton style={{position: "absolute", top: 10, left: 10}} />
            <main style={{}}>
               <p>
                  there
               </p>
               <p>
                  there
               </p>
               <p>
                  there
               </p>
            </main>
            <Footer style={{
               placeContent: "center",
               borderTop: "1px solid whitesmoke",
            }}>
               <h3>ejhfotos</h3>
            </Footer>
         </div>} />
		</Routes>

      {/* Absolute Content */}
      <Sidebar />
      <ToastContainer />
   </div>
}

export default App
