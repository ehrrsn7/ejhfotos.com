import React from "react"
import ReactDOM from "react-dom/client"
import { ContextProvider } from "./contexts/context"
import "./index.css"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
