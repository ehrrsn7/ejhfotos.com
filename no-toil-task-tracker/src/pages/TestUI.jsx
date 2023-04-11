import React from "react"
import * as ReactUse from "react-use"
import {
   SliderLayout, SliderCard,
   MasonryLayout, MasonryCard,
   Slideshow
} from "ehrrsn7-components"
import { Header, Footer } from "@components"
import "./TestUI.css"

export default function TestUI({style}) {
   return <div id="TestUI Page" style={{ minHeight: "100vh", ...style }}>
      <Header>Test UI</Header>
      <div id="Content" style={{
         flexGrow: 1, height: "100%", gap: "1em"
      }}>
         <DirtyDemo />
         <Slideshow />
         <MasonryLayout cardWidth={300} style={{padding: "1em"}}>
            <MasonryCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>1</h3>
               <h3>Ticket Name</h3>
               <p>Ticket description.</p>
            </MasonryCard>
            <MasonryCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>2</h3>
               <h3>Ticket Name</h3>
               <p>Ticket description.</p>
            </MasonryCard>
            <MasonryCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>3</h3>
               <h3>Ticket Name</h3>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
            </MasonryCard>
            <MasonryCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>4</h3>
               <h3>Ticket Name</h3>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
               <p>Ticket description.</p>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
            </MasonryCard>
            <MasonryCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>5</h3>
               <h3>Ticket Name</h3>
               <p>Ticket description.</p>
            </MasonryCard>
         </MasonryLayout>

         <SliderLayout>
            <SliderCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>1</h3>
               <h3>Ticket Name</h3>
               <p>Ticket description.</p>
            </SliderCard>
            <SliderCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>2</h3>
               <h3>Ticket Name</h3>
               <p>Ticket description.</p>
            </SliderCard>
            <SliderCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>3</h3>
               <h3>Ticket Name</h3>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
               <p>Ticket description.</p>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
            </SliderCard>
            <SliderCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>4</h3>
               <h3>Ticket Name</h3>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
               <p>Ticket description.</p>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
               <p>Ticket description.</p>
               <p>
                  Ticket description. Some extra content too.
                  Just filling in the lines.
               </p>
            </SliderCard>
            <SliderCard style={{position: "relative"}}>
               <h3 style={{position: "absolute", top: 10, right: 10}}>5</h3>
               <h3>Ticket Name</h3>
               <p>Ticket description.</p>
            </SliderCard>
         </SliderLayout>

         <p style={{maxWidth:"1000px", margin: "0 auto"}}>
         <ul>
            <h2>Todo/<em><strike>Been Done</strike></em>: </h2>
            <br />
            <strike>
            <li>Figure out which buttons need to be implemented (see dashboard page, etc)</li>
            <br />
            <li><Tab />Evenly space nav buttons on each page, using grid or columns?</li>
            </strike>
            <br />
            <strike>
            <li>Funky header spacing on mobile, seems to be a fixed height. Maybe mess with min/max height?</li>
            <br />
            </strike>
            <strike>
            <li><Tab />Update: problem seems to have gone away, but absolute positioning of logo is still weird.</li>
            <br />
            </strike>
            <li><Tab />Update: header is simplified, still gets kinda funky but no longer janky. Everything is fairly evenly spaced with no overlap. Update: could use an overhaul. Right now, it's just a wrapper with almost no overhead, just the 'header' tag and some flexbox styling.</li>
            <br />
            <strike>
            <li>MasonryLayout finished. Still acts funky (update: padding fixed, hot reload gets kinda jumpy. This probably won't be a problem in production, but you never know. update: call update helper function when dropdown selection hook is modified. [todo: implement selection hook]).</li>
            <br />
            </strike>
            <strike>
            <li>
               <Tab />Update: I never needed to use the callback function in the first place. <br />
               <Tab />I ended up creating a React State ([default val == 10]) called gridRowEnd and passing it to the style prop of MasonryLayout. <br />
               <Tab />Then I refactored the helper function to be a getGridRowEnd calculator instead of a callback calculator/setter function. <br />
               <Tab />The problem there was how to access the element on the dom, since we weren't using our document.querySelectorAll function anymore. This was fixed by using React.useRef and passing ref as a prop called ref to the Card element. That's fucking magical. 🙌🏽 (<em><a href="https://media.tenor.com/ERa47gPVan8AAAAM/the-more-you-know.gif">✨✨the more you know✨✨</a></em>)
            </li>
            <br />
            <li><Tab />I left out if I had tested the jumpiness. In a sense, it's almost completely fixed via the use of the gridRowEnd state hook. However, I haven't tested dynamically creating/removing cards (which I expect to be doing a lot of with the task-tracker app. Currently, it's not urgent because my only use case for it is the simple dropdown ui cards [update, discard, show more, etc.]), but I ultimately want to use it for something like pinterest: the cards themselves can be the table rows.</li>
            <br />
            <li>Implement columnwidth prop. It doesn't need to be a reactive hook, just a prop that doesn't change dynamically. It just needs to be used to set a css variable (pretty easy to google the solution, I believe it's just <code>element.style.setProperty(prop, value)</code></li>
            <br />
            </strike>
            <li><Tab />Update: The MasonryLayout works perfect.</li>
            <br />
            <strike>
            <li>Figure out vite external includes when building. It currently throws an error.</li>
            <br />
            <li><Tab />Update: current workaround = manually copying and pasting to avoid build errors... I think I'm gonna need help from somebody or completely refactor to some monorepo paradigm.</li>
            <li><Tab />I looked up lots of things before giving up: how a repo works, the monolithic repo paradigm, how packages work in npm, possibly publishing a private helper package to npm (this seems to be the only thing that really fixes my problem. Also, it might be the only "best practice"; I'd really rather my components reside in my project workspace so there are less moving parts, but in reality I should be doing TDD (testing/refactoring my components) making them as low-overhead as possible so I never have to edit them again... so maybe)</li>
            <li><Tab />Another update — I found these urls: <a href="https://docs.npmjs.com/cli/v9/configuring-npm/package-json#git-urls-as-dependencies">https://docs.npmjs.com/cli/v9/configuring-npm/package-json#git-urls-as-dependencies</a> <a href="https://stackoverflow.com/questions/16350673/depend-on-a-branch-or-tag-using-a-git-url-in-a-package-json">https://stackoverflow.com/questions/16350673/depend-on-a-branch-or-tag-using-a-git-url-in-a-package-json</a></li>
            <br />
            </strike>
            <li>Update: I put all my components in an isolated npm package called ehrrsn7-components managed using npm publish.</li><br />
            <li>Implement toast. (put under "absolute content in app.jsx")</li>
            <br />
            <li>Implement Slideshow. Shouldn't be too crazy.</li>
            <br />
            <li>Implement Flipbox. (Shouldn't be too crazy.)</li>
            <br />
            <li>For hero images on my main site...use the onload callback prop on image tags to introduce delayed fade-in effect for high-res images to that it's not super taxing on peoples' computers (also, find a solution for hosting low-res images and putting them in a collection -- google drive, firebase, an album on google photos? bonus if you can let the main site be automatically populated by the contents of this collection.)</li>
            <br />
            <li>I don't know why I didn't think of this before... put my demos on replit.com!!!!!!</li>
            <br />
            <li>For accessibility: <a href="https://stackoverflow.com/questions/67572633/how-do-i-implement-a-function-to-navigate-through-my-react-table-using-arrow-key" target="_blank" rel="noopener norefferer" >https://stackoverflow.com/questions/67572633/how-do-i-implement-a-function-to-navigate-through-my-react-table-using-arrow-key</a></li>
         </ul>
         </p>
      </div>
      <Footer style={{padding: "1em", width: "calc(100vw - 2em)"}} />
   </div>
}

function Tab({space}) {
   switch (space) {
      case 1: return <>&nbsp;</>
      case 2: return <>&ensp;</>
      default: return <>&emsp;</>
   }
}

export const DirtyDemo = () => {
   const ref = React.useRef(null)
   const hovered = ReactUse.useHoverDirty(ref)
   return <div ref={ref}> Hover me! {hovered && 'Thanks!'} </div>
}
