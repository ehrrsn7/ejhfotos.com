import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Header, useInitializer, useMedia, SidebarContext } from "ehrrsn7-components"
import graduationHandshakeImage from "/src/assets/elijah graduation handshake.jpeg"
import asteroidsCScreenshot from "/src/assets/Asteroids/asteroids in C++.png"
import asteroidsJSScreenshot from "/src/assets/Asteroids/screenshot of asteroids in javascript.gif"
import asteroidsKotlinScreenshot from "/src/assets/Asteroids/screenshot of asteroids in kotlin.gif"
import noToilTaskTrackerScreenshot from "/src/assets/no-toil-task-tracker-full.png"
import noToilTaskTrackerWithSidebarScreenshot from "/src/assets/no-toil-task-tracker-with-sidebar.png"
import orbitSimulatorScreenshot from "/src/assets/orbit simulator.png"
import "./App.css"

export function App() {
   const mobile = useMedia("(max-width: 450px)")
   const [ showAbout, setShowAbout ] = React.useState(false)
   const { setNonSidebarElement } = React.useContext(SidebarContext)

   useInitializer(() => {
      setNonSidebarElement(document.querySelector("#Content"))
   })

   return <div id="App">
      <Routes>
			<Route path="/" element={<div id="Content" className="Page">
            <Header style={{
               flexDirection: mobile ? "column" : "row",
               borderBottom: "1px solid whitesmoke",
            }}>
               <h1 style={{
                  margin: "0 2em",
                  padding: 0
               }}>Elijah Harrison</h1>
               <img src="https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/322544984_2436021816545175_5810502409847179461_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZV_gxHLl5fsAX-50Y3K&_nc_ht=scontent.fsac1-2.fna&oh=00_AfBK9pE_60VLC5dcl1mRVpyKyU2QopcvWhPU_CL5lIT2gQ&oe=64867F29"
               width={mobile ? "150px" : "50px"}
               style={{
                  margin: mobile ? "1em 0" : "0 1em",
                  borderRadius: "1em"
               }}
               />
            </Header>
            <main>
               <Linktree />
               <span style={{ placeContent: "center" }}>
                  <InlineButton
                  style={{
                     width: "fit-content",
                     margin: 0,
                     padding: "1em",
                     borderRadius: ".5em",
                     placeSelf: "center"
                  }}
                  onClick={() => setShowAbout(!showAbout)}>
                     { showAbout ? "Show less" : "Show more" }
                  </InlineButton>
               </span>
               { showAbout && <About /> }
            </main>
         </div>} />
		</Routes>

      {/* Absolute Content */}
      <ToastContainer />
   </div>
}

function About({}) {
   const tablet = useMedia("(max-width: 700px)")
   return <div id="About">
      <span style={{
         display: "flex", 
         flexDirection: tablet ? "column" : "row",
         placeContent: "space-between",
         placeItems: "start",
         marginBottom: "1em"
      }}>
         <div style={{
            maxWidth: !tablet && "calc(100% - 280px - 2em)",
            display: "flex", 
            flexDirection: "column",
            placeContent: "start",
            placeItems: "start"
         }}>
            <h2>About</h2>
            <p>
               Welcome to my website! My name is Elijah Harrison, and I am a recently graduated software engineer from Brigham Young University — Idaho looking for an entry-level position to apply my skills in computer programming.
            </p>
            <p>
               I am a part-time photographer specializing primarily in weddings, portraits, etc. My photography portfolio can be found on my instagram.
            </p>
         </div>
         <ScreenshotFigure
         style={{width: "280px"}}
         src={graduationHandshakeImage}
         caption="Walking at Graduation"
         />
      </span>
      <div id="GitHub">
         <h3>GitHub</h3>
         <p>I have posted my favorite coding projects on my <Link to="https://github.com/ehrrsn7?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</Link>:</p>
         <ul style={{listStyleType: "none", paddingLeft: 0, gap: "1em"}}>
            <li id="Asteroids">
               <Link to="https://github.com/ehrrsn7/Asteroids">
                  <h2>Asteroids</h2>
               </Link>
               <span>
                  <div style={{flex: 1}}>
                     <p>This is a personal favorite of mine. One of the first games I learned how to make using callback pointers in C++ was Asteroids. Once I learned the basic concepts, I figured the easy physics of it would be a good learning tool for different languages:</p>
                  </div>
                  <div style={{flex: 0}}>
                     <img src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-asteroid-icon-flat-style-png-image_1977257.jpg" alt="asteroid" width={50} />
                  </div>
               </span>
               <InlineStyleButtonsList>
                  <InlineButton
                  to="https://github.com/ehrrsn7/Asteroids/tree/main/C%2B%2B">
                     Asteroids in C++
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/Asteroids/tree/main/Django">
                     Asteroids in Javascript (Django)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/Asteroids/tree/main/Java">
                     Asteroids in Java
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/Asteroids/tree/main/Kotlin">
                     Asteroids in Kotlin
                  </InlineButton>
               </InlineStyleButtonsList>
               <span>
                  <ScreenshotFigure
                  src={asteroidsCScreenshot}
                  caption="Screenshot of Asteroids in C++"
                  />
                  <ScreenshotFigure
                  src={asteroidsJSScreenshot}
                  caption="Screenshot of Asteroids in JavaScript"
                  />
                  <ScreenshotFigure
                  src={asteroidsKotlinScreenshot}
                  caption="Screenshot of Asteroids in Kotlin"
                  />
               </span>
            </li>
            <li id="No-Toil-Task-Tracker">
               <Link to="https://github.com/ehrrsn7/No-Toil-Task-Tracker" target="_blank" rel="noopener noreferrer">
                  <h2>No Toil Task Tracker</h2>
               </Link>
               <p>This is an inventory tracking system I built for <Link to="https://notoil.com" target="_blank" rel="noopener noreferrer">No Toil industries</Link>.</p>
               <p>It was built using Django + React.</p>
               <span className="full-width">
                  <ScreenshotFigure
                  src={noToilTaskTrackerScreenshot}
                  caption="No Toil Task Tracker Application"
                  />
                  <ScreenshotFigure
                  src={noToilTaskTrackerWithSidebarScreenshot}
                  caption="No Toil Task Tracker Application (with sidebar)"
                  />
               </span>
            </li>
            <li id="CSE-232-Labs">
               <Link to="https://github.com/ehrrsn7/cse-232-labs" target="_blank" rel="noopener noreferrer">
                  <h2>CSE 232 Labs</h2>
               </Link>
               <p>CSE 232 was a course I took at <Link to="https://www.byui.edu/majors/software-engineering-bs" target="_blank" rel="noopener noreferrer">BYU-I</Link> taught by James Helfrich. The content was all about implementing the C++ Standard Library containers.</p>
               <InlineStyleButtonsList>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.01.Lab.115/array.h">
                     custom::array
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.02.Lab.100/vector.h">
                     custom::vector
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.03.Lab.100/stack.h">
                     custom::stack
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.04.Lab.100/node.h">
                     custom::node (linked list node)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.05.Lab.100/list.h">
                     custom::list (linked list)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.06.Lab.100/bnode.h">
                     custom::bnode (binary tree node)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.07.Lab.100/bst.h">
                     custom::bst (binary standard tree)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.08.Lab.100/set.h">
                     custom::set (bst implementation)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.09.Lab.100/map.h">
                     custom::map (bst implementation)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.10.Lab.100/priority_queue.h">
                     custom::priority_queue (vector/percolate implementation)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.12.Lab.100/deque.h">
                     custom::deque (wrapping array of arrays implementation)
                  </InlineButton>
                  <InlineButton
                  to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.13.Lab.100/hash.h">
                     custom::unordered_set (hash map)
                  </InlineButton>
               </InlineStyleButtonsList>
            </li>
            <li id="Orbit-Simulator">
               <Link to="https://github.com/ehrrsn7/orbit-simulator"
               target="_blank"
               rel="noopener noreferrer">
                  <h2>Orbit Simulator (CSE 231)</h2>
               </Link>
               <p>This was a partner project between my friend Eli Jukes and I.</p>
               <p>We set it up so that the simulator uses real physics formulas with dilation/adjustments to run properly.</p>

               <ScreenshotFigure
               src={orbitSimulatorScreenshot}
               caption="Screenshot of Orbit Simulator Program"
               />
            </li>
         </ul>
      </div>
   </div>
}

function InlineStyleButtonsList({style, className, id, children}) {
   const newClassName = `InlineStyleButtonsList ${className}`
   return <ul id={id} style={style} className={newClassName}>
      {children}
   </ul>
}

function InlineButton({style, className, id, children, to, onClick}) {
   const newClassName = `InlineButton ${className}`
   return <Link to={to} target="_blank" rel="noopener noreferrer">
      <li id={id} className="InlineItem">
         <button style={style} className={newClassName} onClick={onClick}>
            {children}
         </button>
      </li>
   </Link>
}

function ScreenshotFigure({ src, caption, style }) {
   return <figure className="ScreenshotFigure" style={style}>
      <img src={src} alt={caption} width="200px" />
      <figcaption>{caption}</figcaption>
   </figure>
}

function LinktreeItem({ children, to, style }) {
   return <Link to={to}
   target="_blank" rel="noopener noreferrer">
   <span className="LinktreeItem" style={style}>
      {children}
   </span>
   </Link>
}

function Linktree({ style }) {
   const tablet = useMedia("(max-width: 650px)")
   return <div style={style}>
      <h2 style={{width: "100%", marginBottom: "1em", textAlign: tablet && "center"}}> Linktree </h2>
      <span id="Linktree" className="Links" style={{
         placeItems: tablet && "center",
         placeContent: tablet && "center",
         gap: "1em"
      }}>
         <LinktreeItem to="https://instagram.com/ejhfotos">
            <div>
               <h3>Instagram</h3>
               <h4>@ejhfotos</h4>
               <p>photography portfolio</p>
               <p>personal contact</p>
            </div>
            <img src={iconURLs.instagram} width="35px" />
         </LinktreeItem>
         <LinktreeItem to="https://github.com/ehrrsn7">
            <div>
               <h3>GitHub</h3>
               <h4>@ehrrsn7</h4>
               <p>code repositories</p>
            </div>
            <img src={iconURLs.github} width="35px" />
         </LinktreeItem>
         <LinktreeItem to="https://www.linkedin.com/in/ejhfotos/">
            <div>
               <h3>LinkedIn</h3>
               <h4>@ejhfotos</h4>
               <p>academic/career summary</p>
               <p>resume</p>
            </div>
            <img src={iconURLs.linkedin} width="35px" />
         </LinktreeItem>
         <LinktreeItem to="https://www.instagram.com/_swagmaster_james_/">
            <div>
               <h3>Instagram</h3>
               <h4>@_swagmaster_james_</h4>
               <p>personal account</p>
            </div>
            <img src={iconURLs.instagram} width="35px" />
         </LinktreeItem>
         <LinktreeItem to="https://www.facebook.com/ehrrsn7/">
            <div>
               <h3>Facebook</h3>
               <h4>ehrrsn7</h4>
               <p>personal account</p>
            </div>
            <img src={iconURLs.facebook} width="35px" />
         </LinktreeItem>
      </span>
   </div>
}

const iconURLs = {
   facebook: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png",
   instagram: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png",
   linkedin: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png",
   github: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png",
   twitter: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-256.png",
   snapchat: "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_snapchat-1024.png",
   youtube: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-256.png",
}

export default App
