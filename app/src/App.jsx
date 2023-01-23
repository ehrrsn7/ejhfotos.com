// import
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"

// components
import Header from "./components/Header"
import Footer from "./components/Footer"

// assets
import "./App.css"

// define
const PageNotFound = () => (
   <div className="content">
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
   </div>
)
const Albums = () => (
   <div className="content">
      <h1>Albums</h1>
      <Link to="/">Go Home</Link>
   </div>
)
const About = () => (
   <div className="content">
      <h1>About</h1>
      <Link to="/">Go Home</Link>
   </div>
)
const Portfolio = () => (
   <div className="content">
      <h1>Portfolio</h1>
      <Link to="/">Go Home</Link>
   </div>
)

export default function App() {
   return <BrowserRouter className="App">
      <Header />
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/Albums" exact component={Albums} />
         <Route path="/About" exact component={About} />
         <Route path="/Portfolio" exact component={Portfolio} />
         <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
   </BrowserRouter>
}
