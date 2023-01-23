// import
import React, { useContext } from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"

// contexts
import { ThemeContext } from "./contexts/ThemeContext"

// pages
import { Main, PageNotFound } from "./pages"

// components
import { BackToTop } from "./components"

// utils
import ScrollToTop from "./utils/ScrollToTop"
import logCredits from "./utils/logCredits"

// assets
import "./App.css"

export default function App() {

	const { theme } = useContext(ThemeContext)
	
	logCredits(theme)

	return <div className="app">
		<BrowserRouter>
			<ScrollToTop/>
			<Switch>
				<Route component={Main} exact path="/" />
				<Route component={PageNotFound} to="*" />
			</Switch>
		</BrowserRouter>
		<BackToTop />
	</div>
}
