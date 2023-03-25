import React from "react"
import * as ReactUse from "react-use"
import { MasonryCard, MasonryLayout } from "../../ehrrsn7-components"
import { Sidebar, SidebarContext, ToggleSidebarButton } from "../../ehrrsn7-components"
import "./App.css"

export default function App() {
	const { showSidebar } = React.useContext(SidebarContext)
	const mobile = ReactUse.useMedia("(max-width: 380px)")
	React.useContext(() => {console.log({showSidebar}), [ showSidebar ]})
   return <div id="App">
		<ToggleSidebarButton onClick={() => console.log("ToogleSidebar")} />
		<Sidebar style={{
			background: "white",
			border: "1px solid whitesmoke"
		}} closeButton>Sidebar Contents</Sidebar>
		<MasonryLayout cardWidth={mobile ? 200 : 300} 
		style={{background: "whitesmoke"}}>
			<MasonryCard style={{border: "1px solid whitesmoke"}}>
				<p>Hello</p>
			</MasonryCard>
			<MasonryCard style={{border: "1px solid whitesmoke"}}>
				<p>Hello world</p>
			</MasonryCard>
			<MasonryCard style={{border: "1px solid whitesmoke"}}>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
			</MasonryCard>
			<MasonryCard style={{border: "1px solid whitesmoke"}}>
				<h3>Sample Card</h3>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
			</MasonryCard>
			hi
			<h4>there</h4>
		</MasonryLayout>
	</div>
}
