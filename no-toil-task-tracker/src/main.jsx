import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ErrorBoundary } from "./components/ErrorBoundary"
import { ContextProvider } from "./contexts/context"
import { SidebarContextProvider } from "ehrrsn7-components"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<SidebarContextProvider>
				<ErrorBoundary fallback={<div>Error loading application.</div>}>
					<App />
				</ErrorBoundary>
			</SidebarContextProvider>
		</ContextProvider>
  </React.StrictMode>,
)
