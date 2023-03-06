import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Context } from "./contexts/context.jsx"
import Pages from "./pages"
import "./App.css"

export default function App() {
	const { openSidebar, setOpenSidebar } = React.useContext(Context)

	const initialized = React.useRef(false)
	React.useEffect(() => {
		if (!initialized.current) {
			initialized.current = true

			const handler = event => {
				if (event.key != "Escape") return
				!openSidebar && setOpenSidebar(false)
			}
			
			document.addEventListener("keydown", handler)
			return removeEventListener("keydown", handler)
		}
	})

	return <div id="App">
	<BrowserRouter>
	<Routes>
		<Route path="/" element={<Pages.Dashboard />} />
		<Route path="/Dashboard" element={<Navigate to="/" />} />
		<Route path="/Stamp" element={<Pages.Stamp />} />
		<Route path="/Spray" element={<Pages.Spray />} />
		<Route path="/Check" element={<Pages.Check />} />
		<Route path="/Oil" element={<Pages.Oil />} />
		<Route path="/Bag" element={<Pages.Bag />} />
		<Route path="/CompletedParts" element={<Pages.CompletedParts />} />
		<Route path="/DiscardedParts" element={<Pages.DiscardedParts />} />
	</Routes>
	</BrowserRouter>
	</div>
}
