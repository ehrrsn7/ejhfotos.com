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
const Minecraft = () => <div id="Home" className="content">
   <Header />
   <main>
      <p>
         If you followed this link in the browser, you have been rerouted to this page, <a href="http://about.ejhfotos.com/Minecraft">about.ejhfotos.com/Minecraft</a>.
      </p>

      <p>
         If you're not on my server, contact me to get whitelisted. Once you are, you can join by putting <a>minecraft.ejhfotos.com</a> as the IP. 
      </p>
   </main>
   <Footer />
</div>

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
         <Route path="/Minecraft" element={<Minecraft />} />
         <Route path="*" element={<PageNotFound />} />
      </Routes>
   </BrowserRouter>
}
