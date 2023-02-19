import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ResumeMD from "./mdx/resume.mdx"
import MinecraftMD from "./mdx/minecraft.mdx"
import ContactMD from "./mdx/contact.mdx"
import "./App.css"

export function ProfilePicture() {
	const profilePicture = "https://lh3.googleusercontent.com/gBBcfcWQX6hG1Azxve5mzgaEkjTjwNtFWJylOjkITwL3EbbLzq3MJfqGlnXT2hhf9NpWm73RIB_aWfcJ5hFwdjfehbXtniKBzPTKc4SgMy2KyPI_if8et5Q4eZ6qLNnd6N2GthPEEV8WnQcpsKSNgFpPZs3dfaH7mtyV0Aa2Dc6YJCj1zWXOPqAHuRgLYZRNeIDnKt20N_ntinty767IibQ_F7ufLnccgzmpo1KK1a4s3iHcdTWW69ZMX9W6k3YbUF6y3pGLS48WHZuD71ALjOlqO-iF_QAWprwxQUTfmgWN1PvPVAZYQpk4wC6MldHLCzoc-4joH_YmkMIzQ069bzLq0h7z7JpwmFtfGxGsK19OpgsgJr009C7zD3c1rnv82KMg71qs0mJvh2KSpqLExM0byvFRdj1lAZLwF6IcVGYn8PzaS3ssDtNXBRUvAj3hdvQXu1sBoU_lb1ncmplSb_RPiK1askrTtaw-ph5awVxAlLnrJRNaXB6vTRd637UnE1SDVRCnDFhjdd1_XVm7du7ugfm6FdbHp51FYCajWlZoIaslu9eGLOiqt06QJiF-wRbb7KjdGBNsj2TAmbGNRqRl-8Bb2LYiKSyl6E1MoY0eHOcExYHpmaKTCg6c9s6VGddZr3Rm42l2uWPVGCJ5rcC74FAt7xLTJayeiunFmWPViPbhet5sPmhqkhiRrbHTrZJT2jtD_xCgI1kM0i7E7jWSfvUbNWLexJTm4O6dUX2P60BoTxw-eSAqZKN5O92P0nxtLC7EBt0GN1ic70hVGOS4cIyWWepNC3pkcdhaDgI6eruF13YxmKJcsaVVONga_p7NckYXeHW5c9Io6J1e7J9xeEcko8-5FfBN9sMUC__xNE6kjcU2qUSjUwDgkhBhtsWKW3Pq3AXnbkrc-Jo5Vbx6oA4yu2gdlAVJBg6g0P7vHxcvWkxTt9qzBME5U7Xbd9RLlbzKsXMPZq1h88o=w746-h498-s-no?authuser=0"
	return <img id="ProfilePicture" src={profilePicture} alt="profile picture" />
}

export function Home() {
	return <>
		<Header />
		<ProfilePicture />
		<p>hello</p>
		<Footer />
	</>
}

export function Resume() {
	const onClick = (event: any) => {
		console.log(event)
	}
	return <>
		<Header />
		<button onClick={onClick}>Print PDF</button>
		<div id="Resume">
			<ResumeMD />
		</div>
		<Footer />
	</>
}

export function Minecraft() {
	return <>
		<Header />
		<div id="Minecraft">
			<MinecraftMD />
		</div>
		<Footer />
	</>
}

export function Contact() {
	return <>
		<Header />
		<div id="Contact">
			<ContactMD />
		</div>
		<Footer />
	</>
}

export function Header() {
	return <header>
		<Link to="/"><h1>about.ejhfotos.com</h1></Link>
		<span>
			<Link to="/"><h1 style={{fontSize: 14, padding: "1em", textAlign: "left"}}>Home</h1></Link>
			<Link to="/Resume"><h1 style={{fontSize: 14, padding: "1em", textAlign: "left"}}>Resume</h1></Link>
		</span>
	</header>
}

export function Footer() {
	return <footer></footer>
}

export function NotFound() {
	return <>
		Page not found.
		<Link to="/">Go Home</Link>
	</>
}

export default function App() {
	return <div id="App">
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/minecraft" element={<Minecraft />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</BrowserRouter>
	</div>
}
