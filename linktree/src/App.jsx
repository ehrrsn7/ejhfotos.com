import React from "react"
import "./App.css"

const links = [
	{
		name: "Instagram",
		user: "@ejhfotos",
		url: "https://www.instagram.com/ejhfotos/",
		icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png"
	},
	{
		name: "GitHub",
		user: "@ehrrsn7",
		url: "https://www.github.com/ehrrsn7/",
		icon: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png"
	},
	{
		name: "LinkedIn",
		user: "@ejhfotos",
		url: "https://www.linkedin.com/in/ejhfotos/",
		icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png"
	},
	{
		name: "Instagram",
		user: "@_swagmaster_james_",
		url: "https://www.instagram.com/_swagmaster_james_/",
		icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png"
	},
	{
		name: "Facebook",
		user: "@ehrrsn7",
		url: "https://www.facebook.com/ehrrsn7/",
		icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
	},
	{
		name: "Twitter",
		user: "@harriz_one",
		url: "https://www.twitter.com/harriz_one/",
		icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-256.png"
	},
	{
		name: "Snapchat",
		user: "@harriz_one",
		url: "https://www.snapchat.com/add/harriz_one?share_id=MeKoSz7IN44&locale=en-US",
		icon: "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_snapchat-1024.png"
	},
	{
		name: "Youtube",
		user: "@swagmasterjames",
		url: "https://www.youtube.com/channel/UCnnnavIO_oJmW_LbXEEkmuQ",
		icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-256.png"
	},
]

const profilePicture = "https://lh3.googleusercontent.com/gBBcfcWQX6hG1Azxve5mzgaEkjTjwNtFWJylOjkITwL3EbbLzq3MJfqGlnXT2hhf9NpWm73RIB_aWfcJ5hFwdjfehbXtniKBzPTKc4SgMy2KyPI_if8et5Q4eZ6qLNnd6N2GthPEEV8WnQcpsKSNgFpPZs3dfaH7mtyV0Aa2Dc6YJCj1zWXOPqAHuRgLYZRNeIDnKt20N_ntinty767IibQ_F7ufLnccgzmpo1KK1a4s3iHcdTWW69ZMX9W6k3YbUF6y3pGLS48WHZuD71ALjOlqO-iF_QAWprwxQUTfmgWN1PvPVAZYQpk4wC6MldHLCzoc-4joH_YmkMIzQ069bzLq0h7z7JpwmFtfGxGsK19OpgsgJr009C7zD3c1rnv82KMg71qs0mJvh2KSpqLExM0byvFRdj1lAZLwF6IcVGYn8PzaS3ssDtNXBRUvAj3hdvQXu1sBoU_lb1ncmplSb_RPiK1askrTtaw-ph5awVxAlLnrJRNaXB6vTRd637UnE1SDVRCnDFhjdd1_XVm7du7ugfm6FdbHp51FYCajWlZoIaslu9eGLOiqt06QJiF-wRbb7KjdGBNsj2TAmbGNRqRl-8Bb2LYiKSyl6E1MoY0eHOcExYHpmaKTCg6c9s6VGddZr3Rm42l2uWPVGCJ5rcC74FAt7xLTJayeiunFmWPViPbhet5sPmhqkhiRrbHTrZJT2jtD_xCgI1kM0i7E7jWSfvUbNWLexJTm4O6dUX2P60BoTxw-eSAqZKN5O92P0nxtLC7EBt0GN1ic70hVGOS4cIyWWepNC3pkcdhaDgI6eruF13YxmKJcsaVVONga_p7NckYXeHW5c9Io6J1e7J9xeEcko8-5FfBN9sMUC__xNE6kjcU2qUSjUwDgkhBhtsWKW3Pq3AXnbkrc-Jo5Vbx6oA4yu2gdlAVJBg6g0P7vHxcvWkxTt9qzBME5U7Xbd9RLlbzKsXMPZq1h88o=w746-h498-s-no?authuser=0"

export function Header() {
	return <header id="Header">
		<h1>Elijah Harrison</h1>
		<img id="ProfilePicture" src={profilePicture} alt="profile picture" />
		<h3>Linktree</h3>
	</header>
}

export function Body() {
	return <div id="Body">
		{links.map(l => <a key={l.name} href={l.url} style={{width: "100%"}}>
			<div>
				<button style={{display: "block", margin: "0 0 1em 0", padding: "0 1em 0 1em", width: "100%"}}>
					<span style={{
						display: "flex",
						flexDirection: "row",
						placeItems: "center",
						flexWrap: "wrap",
					}}>
						<img src={l.icon} alt="instagram logo" />
						
						<p>
							{l.name}
						</p>
						
						<p style={{paddingLeft: "1em", paddingRight: "1em"}}>—</p>
						
						<p>
							{l.user}
						</p>
					</span>
				</button>
			</div>
		</a>)}
	</div>
}

export function Footer() {
	return <footer id="Footer">
		<p>Made by Elijah Harrison using React.js</p>
		<span style={{display: "flex"}}>
			<a href="http://ejhfotos.com/" style={{padding: "1em"}}><p>ejhfotos.com</p></a>
			<a href="http://about.ejhfotos.com/" style={{padding: "1em"}}><p>about.ejhfotos.com</p></a>
		</span>
	</footer>
}

export default function App() {
  	return <div id="App">
      <Header />
      <Body />
      <Footer />
  	</div>
}
