import React from "react"
import * as ReactUse from "react-use"
import {
   Header, Footer, ErrorBoundary, Sidebar, ToggleSidebarButton
} from "ehrrsn7-components"
import "./App.css"
import { SidebarContext } from "../../ehrrsn7-components"

export default function App() {
   const { sidebarMarginLeft } = React.useContext(SidebarContext)
   const mobile = ReactUse.useMedia("(max-width: 500px)")
   return <div id="App" style={{ marginLeft: sidebarMarginLeft }}>
      <ErrorBoundary fallback={<>Error rendering App</>}>
         <Header style={{placeContent: "space-between", padding: "1em", width: "calc(100% - 2em)"}}>
            { mobile ? <>
               <ToggleSidebarButton onClick={() => console.log("hello sidebar")} />
               <h2>ejhfotos</h2>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png" width={25} />
            </> : <>header desktop</> }
         </Header>
         <div id="Content" style={{flexGrow: 1}}>
            Content<br />
         </div>
         <Footer>
            footer
         </Footer>

         {/* Absolute Content */}
         <Sidebar closeButton style={{background: "white"}}>Sidebar Contents</Sidebar>
      </ErrorBoundary>
   </div>
}
