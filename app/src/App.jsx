// import
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Placeholder from "./pages/Placeholder"

// components
import Header from "./components/Header"
import Footer from "./components/Footer"

// assets
import "./App.css"
import logo from "./logo.svg"

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
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Placeholder" element={<Placeholder subdomain="www" logo={logo} path="/" />} />
         <Route path="*" element={<PageNotFound />} />
      </Routes>
   </BrowserRouter>
}
