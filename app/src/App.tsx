// import
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// pages
import Home from "./pages/Home"
import Portraits from "./pages/Portraits"
import Engagements from "./pages/Engagements"
import Weddings from "./pages/Weddings"
import Maternal from "./pages/Maternal"
import Graduation from "./pages/Graduation"
import Intimates from "./pages/Intimates"
import Blog from "./pages/Blog"

// components
import Header from "./components/Header"
import Footer from "./components/Footer"

// assets
import "./App.css"

// define
const PageNotFound = () => <div id="PageNotFound" className="content">
   <Header />
   <div style={{padding: "1em", height: "15em"}}>
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
   </div>
   <Footer />
</div>

const Toast = () => <ToastContainer
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

export default function App() {
   return <div id="App">
      <BrowserRouter>
         <Toast />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portraits" element={<Portraits />} />
            <Route path="/Engagements" element={<Engagements />} />
            <Route path="/Weddings" element={<Weddings />} />
            <Route path="/Maternal" element={<Maternal />} />
            <Route path="/Graduation" element={<Graduation />} />
            <Route path="/Intimates" element={<Intimates />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </BrowserRouter>
   </div>
}
