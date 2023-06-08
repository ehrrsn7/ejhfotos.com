import React from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Sidebar, Header, useInitializer, ToggleSidebarButton, useMedia, SidebarContext } from "ehrrsn7-components"
import "./App.css"

export function App() {
   const mobile = useMedia("(max-width: 450px)")
   const { setNonSidebarElement } = React.useContext(SidebarContext)

   useInitializer(() => {
      setNonSidebarElement(document.querySelector("#Content"))
   })

   return <div id="App">
      <Routes>
			<Route path="/" element={<div id="Content" className="Page">
            <Header style={{
               placeContent: mobile ? "center" : "space-between",
               borderBottom: "1px solid whitesmoke",
            }}>
               <span style={{
                  placeContent: mobile ? "center" : "space-between",
               }}>

               </span>
               <h1 style={{
                  margin: "0 2em",
                  padding: 0
               }}>Elijah Harrison</h1>
               <img src="https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/322544984_2436021816545175_5810502409847179461_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZV_gxHLl5fsAX-50Y3K&_nc_ht=scontent.fsac1-2.fna&oh=00_AfBK9pE_60VLC5dcl1mRVpyKyU2QopcvWhPU_CL5lIT2gQ&oe=64867F29" width="50px" style={{marginRight: "1em", borderRadius: "1em"}} />
            </Header>
            { !mobile &&
               <ToggleSidebarButton style={{position: "absolute", top: 10, left: 10}} />
            }
            <main>
               <Linktree />
            <h2>About</h2>
            <p>
               Recently graduated software engineer from Brigham Young University — Idaho looking for an entry-level position to apply my skills in computer programming.
            </p>
            </main>
         </div>} />
		</Routes>

      {/* Absolute Content */}
      <Sidebar closeButton>
         <h1 style={{margin: ".5em"}}>hi</h1>
         <a href="http://about.ejhfotos.com">
            <button>
               <h3>About</h3>
            </button>
         </a>
         <a href="http://photography.ejhfotos.com">
            <button>
               <h3>Photography</h3>
            </button>
         </a>
         <a href="http://github.com/ehrrsn7">
            <button>
               <h3>GitHub</h3>
            </button>
         </a>
         <a href="https://github.com/ehrrsn7?tab=repositories">
            <button>
               <h3>No Toil Task Tracker (Demo)</h3>
            </button>
         </a>
      </Sidebar>
      <ToastContainer />
   </div>
}

function Linktree({}) {
   const mobile = useMedia("(max-width: 450px)")
   return <div id="Linktree">
      <h2>Linktree</h2>
      <div style={{placeContent: "center", flexDirection: !mobile && "row", gap: "1em", flexWrap: "wrap"}}>
         <a className="LinktreeItem" href="https://instagram.com/ejhfotos" target="_blank" rel="norefferer">
            <span>
               <div>
                  <h3>Instagram</h3>
                  <h4>@ejhfotos</h4>
                  <p>photography portfolio</p>
                  <p>personal contact</p>
               </div>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" width="35px" />
            </span>
         </a>
         <a className="LinktreeItem" href="https://www.github.com/ehrrsn7/" target="_blank" rel="norefferer">
            <span>
               <div>
                  <h3>GitHub</h3>
                  <h4>@ehrrsn7</h4>
                  <p>code repositories</p>
               </div>
               <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="35px" />
            </span>
         </a>
         <a className="LinktreeItem" href="https://www.linkedin.com/in/ejhfotos/" target="_blank" rel="norefferer">
            <span>
               <div>
                  <h3>LinkedIn</h3>
                  <h4>@ejhfotos</h4>
                  <p>resume</p>
               </div>
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="35px" />
            </span>
         </a>
      </div>
   </div>
}

export default App
