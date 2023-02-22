import { Link } from "react-router-dom"
import useMediaQuery from "../hooks/useMediaQuery"
import "./Header.css"

export default function Header() {
   const isTooSmall = useMediaQuery("(max-width: 350px)")
	return <header>
		<Link to="/">
			{isTooSmall ? <><h1>about</h1><h2>ejhfotos.com</h2></> : <h1>about.ejhfotos.com</h1>}
		</Link>
		<span style={{justifyContent: "space-around", maxWidth: 400}}>
			<Link to="/"><h1>Home</h1></Link>
			<Link to="/Resume"><h1>Resume</h1></Link>
			<Link to="/Minecraft"><h1>Minecraft</h1></Link>
		</span>
	</header>
}
