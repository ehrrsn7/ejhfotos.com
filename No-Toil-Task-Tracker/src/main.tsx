import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from "./components/ErrorBoundary"
import { ContextProvider } from "./contexts/context"
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ContextProvider>
			<ErrorBoundary fallback={<div>
				Error loading application.
			</div>}>
				<App />
			</ErrorBoundary>
		</ContextProvider>
  </React.StrictMode>,
)
