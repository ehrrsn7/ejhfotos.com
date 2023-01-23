// import
import logo from "../logo.svg"

export default function Placeholder({subdomain, logo, path}) {
   return <div>
      <header className="App-header content">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
            Welcome to <code>http://{subdomain}.ejhfotos.com{path}</code> !
         </p>
      </header>
   </div>
}
