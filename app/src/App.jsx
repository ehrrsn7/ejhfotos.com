import React from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Sidebar, Header, Footer, useInitializer, ToggleSidebarButton, useMedia } from "ehrrsn7-components"
import "./App.css"

export function App() {
   const mobile = useMedia("(max-width: 450px)")

   useInitializer(() => {
      
   })

   return <div id="App">
      <Routes>
			<Route path="/" element={<div id="Content" className="Page">
            <Header style={{
               placeContent: mobile ? "center" : "space-between",
               borderBottom: "1px solid whitesmoke",
            }}>
               <h1 style={{
                  margin: "0 2em",
                  padding: 0
               }}>Elijah Harrison</h1>
               <img src="https://lh3.googleusercontent.com/kEctuyaef0MuFv2Hn-jMRCGf7c7RCKgT6AJYeGZPaeOCdm1mStkz2kapUUJPyXzv1iQhupIMpL2wrZ6YsWtQH-ITweVkLUtgMebIiuP4ZAZcLoFhCW9e9YBVz2NlY4O3NNWLvG7y_SHKrOkTfgQO2MopAr2AbYGupu6PlSlkd3my-Q1FrZqRtRNXIYB63KI9PUVgR7Yiicoj-ORNI-pZjcofeXMCsJNK_z2DO9GidZLub_AXviXGxv4NRXtYsvH3Wbqgxdq838ZxWPviNPf20wrvDfd6R3ylfNQF5h3DQG-C-fctPLoBigXZ0bem7csxI_yABsavduNkkoukn2SvWm27KQMmMKvUQhrfK_OPfJgBaPLpUshu018LPN1V_kWDNbhKww6WRRIrGvzN1p1_P0yWPZnGiaMs_NVC88ZvmTugi0mwM4rQLmvine_nwTw0_16ZobBPQi-hVB3tGpvDMugbpgJBapXt4g3dIit-8OhKFyznqZOJILBiKJKDhiQCEmNUIPHCVHenqsk8YhbbkxhC3fUtFE0pdp2pqIfNk4oOapQ1tqmGBdAjqs1PKZvOTArC9DJHH6VFx3cXhf52Do7unCqdBXNX9WAjGsxJBBzNKZ7UCK_4LXQlubUgxWhQqxiRfBddT5QBe0lxyxO_4mh1wAH6MvoHHRVz0Mi0oXyi_K1GtTaE1h4MX1070yishtxGfxaN00rAKXTBFtJ1VjEYs6bPd3JYEuvU8s_srKzu2coOln-bcxHJ4ca8YcjGVN_gUbGevwLS0CRU3zwHvfG3X3sQCX9yYFCocv9VVSkglRQM998zTNtN4FrWxZx6n6vF1xb75QJ0PdJ0hDk-pFGSmCxj9VQklTP6-4D5yLmJvH3TC1I5f5moJKMuYS5F1MvZAD1eh2aq5lGUtXYC2paaCte_oLBuL2dV7Tt_4PoL-RNFGwV0cgB5osTwyYM6pPNI5qtXpAcmBW7f3Sg=w2472-h1648-s-no?authuser=0" width="50px" style={{paddingRight: "1em"}} />
            </Header>
            { !mobile &&
               <ToggleSidebarButton style={{position: "absolute", top: 10, left: 10}} />
            }
            <main>
               <Linktree />
            <h2>About</h2>
            <p>
               Recently graduated software engineer from Brigham Young University — Idaho looking for an entry-level position to apply my skills in computer programming.
            </p>
            </main>
         </div>} />
		</Routes>

      {/* Absolute Content */}
      <Sidebar closeButton>
         <h1 style={{margin: ".5em"}}>hi</h1>
         <a href="http://about.ejhfotos.com">
            <button>
               <h3>About</h3>
            </button>
         </a>
         <a href="http://photography.ejhfotos.com">
            <button>
               <h3>Photography</h3>
            </button>
         </a>
         <a href="http://github.com/ehrrsn7">
            <button>
               <h3>GitHub</h3>
            </button>
         </a>
         <a href="https://github.com/ehrrsn7?tab=repositories">
            <button>
               <h3>No Toil Task Tracker (Demo)</h3>
            </button>
         </a>
      </Sidebar>
      <ToastContainer />
   </div>
}

function Linktree({}) {
   const mobile = useMedia("(max-width: 450px)")
   return <div id="Linktree">
      <h2>Linktree</h2>
      <div style={{placeContent: "center", flexDirection: !mobile && "row", gap: "1em", flexWrap: "wrap"}}>
         <a className="LinktreeItem" href="https://instagram.com/ejhfotos" target="_blank" rel="norefferer">
            <span>
               <div>
                  <h3>Instagram</h3>
                  <h4>@ejhfotos</h4>
                  <p>photography portfolio</p>
                  <p>personal contact</p>
               </div>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" width="35px" />
            </span>
         </a>
         <a className="LinktreeItem" href="https://www.github.com/ehrrsn7/" target="_blank" rel="norefferer">
            <span>
               <div>
                  <h3>GitHub</h3>
                  <h4>@ehrrsn7</h4>
                  <p>code repositories</p>
               </div>
               <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="35px" />
            </span>
         </a>
         <a className="LinktreeItem" href="https://www.linkedin.com/in/ejhfotos/" target="_blank" rel="norefferer">
            <span>
               <div>
                  <h3>LinkedIn</h3>
                  <h4>@ejhfotos</h4>
                  <p>resume</p>
               </div>
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="35px" />
            </span>
         </a>
      </div>
   </div>
}

export default App
