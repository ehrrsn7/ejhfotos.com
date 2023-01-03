// import
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"

// components
import Header from "./components/Header"
import Footer from "./components/Footer"

// assets
import "./App.css"

export default function App() {
   return <BrowserRouter className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
   </BrowserRouter>
}
