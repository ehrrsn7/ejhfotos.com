// import
import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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

function Toast() {
   return <ToastContainer
   position="top-right"
   autoClose={3000}
   hideProgressBar={false}
   newestOnTop={false}
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="colored"
   />
}

export default function App() {
   return <BrowserRouter className="App">
      <Toast />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="*" element={<PageNotFound />} />
      </Routes>
   </BrowserRouter>
}
