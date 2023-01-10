import { Link} from "react-router-dom"
import { Navbar } from "../../components"
import "./PageNotFound.css"

export default function PageNotFound() {
   return <div id="PageNotFound">
      <Navbar />
      <div className="not-navbar">
         <h1>Page Not Found</h1>
         <Link to="/">Go Home</Link>
      </div>
   </div>
}