// import
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"

// components
import Header from "./components/Header"
import Footer from "./components/Footer"

// assets
import "./App.css"

// define
const PageNotFound = () => <div className="content">
   <Header />
   <div style={{padding: "1em", height: "15em"}}>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
   </div>
   <Footer />
</div>

export default function App() {
   return <BrowserRouter className="App">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="*" element={<PageNotFound />} />
      </Routes>
   </BrowserRouter>
}
