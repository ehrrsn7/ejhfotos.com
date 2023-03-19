import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { SidebarContext } from "ehrrsn7-components"
import { Sidebar } from "./components"
import Pages from "./pages"
import "./App.css"

export default function App() {
	const { showSidebar, setShowSidebar } = React.useContext(SidebarContext)
	const { sidebarMarginLeft } = React.useContext(SidebarContext)

	const initialized = React.useRef(false)
	React.useEffect(() => {
		if (!initialized.current) {
			initialized.current = true

			const escHandler = event => {
				if (event.key != "Escape") return
				if (!showSidebar) setShowSidebar(false)
			}
			
			document.addEventListener("keydown", escHandler)
			return removeEventListener("keydown", escHandler)
		}
	})

	return <div id="App" style={{
		marginLeft: sidebarMarginLeft, transition: "margin-left 0.3s"
	}}>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Pages.Dashboard />} />
			<Route path="/Dashboard" element={<Navigate to="/" />} />
			<Route path="/TestUI" element={<Pages.TestUI />} />
			<Route path="/Stamp" element={<Pages.Stamp />} />
			<Route path="/Spray" element={<Pages.Spray />} />
			<Route path="/Check" element={<Pages.Check />} />
			<Route path="/Oil" element={<Pages.Oil />} />
			<Route path="/Bag" element={<Pages.Bag />} />
			<Route path="/CompletedParts" element={<Pages.CompletedParts />} />
			<Route path="/DiscardedParts" element={<Pages.DiscardedParts />} />
		</Routes>
		
		{/* Absolute Content */}
		<Sidebar />
	</BrowserRouter>
	</div>
}
