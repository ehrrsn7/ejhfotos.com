import React from "react"
import { ErrorBoundary } from "."
import "./MasonryLayout.css"

export const MasonryLayout = (props) => 
<ErrorBoundary fallback={<>Error rendering MasonryLayout</>}>
   <Provider {...props} />
</ErrorBoundary>

const Provider = (props) => 
<MasonryLayoutContextProvider>
   <Consumer {...props} />
</MasonryLayoutContextProvider>

const Consumer = ({ style, children, cardWidth }) => {
   const { setCardWidth } = React.useContext(MasonryLayoutContext)
   const ref = React.useRef()
   React.useEffect(() => { setCardWidth(cardWidth) }, [])
   const getGridTemplateColumnsValue = (cardWidth) => 
      !(cardWidth && cardWidth > 0) ? 
         undefined : // off by default ('0')
         `repeat(auto-fill, ${cardWidth}px)`
   
   return <ErrorBoundary fallback={<>
      Error rendering subcomponents.MasonryLayout
   </>}>
      <span className="MasonryLayout" style={{
         gridTemplateColumns: getGridTemplateColumnsValue(cardWidth),
         ...style
      }} ref={ref}>
         {children}
      </span>
   </ErrorBoundary>
}

export function MasonryCard({style, children}) {
   const { cardWidth } = React.useContext(MasonryLayoutContext)
   
   const ref = React.createRef()
   
   // '10' makes things a little less jarring on load
   const [ gridRowEnd, setGridRowEnd ] = React.useState(10)

   React.useEffect(() => { setGridRowEnd(getGridRowEnd(ref.current)) })

   return <div className="MasonryCard" ref={ref} style={{
      gridRowEnd: `span ${gridRowEnd}`,
      width: cardWidth != 0 && cardWidth,
      ...style, margin: 0, padding: 0
   }}>
      <div style={{padding: style?.padding, margin: style?.margin}}>
         {children}
      </div>
   </div>
}

/************************************************************
 * MasonryLayout Context
 ************************************************************/
export const MasonryLayoutContext = React.createContext({})
let initialized = false

export function MasonryLayoutContextProvider({ children }) {
   const [ cardWidth, setCardWidth ] = React.useState(
      0 // '0' or off by default
   ) 

   const value = {
      cardWidth, setCardWidth
   }

   if (initialized)
      throw "MasonryLayout context is already defined. \n\n Don't nest MasonryLayoutContextProviders recursively. \n\n Several contexts will be created, causing bugs."

   return <MasonryLayoutContext.Provider value={value}>
      { children }
   </MasonryLayoutContext.Provider>
}

/************************************************************
 * Helper Functions
 ************************************************************/
function getGridRowEnd(card) {
   try {
      const container = document.querySelector(".MasonryLayout")

      if (!card)
         throw new Error(`card (${card}) is undefined.`)
      if (!container)
         throw new Error(`container (${container}) is undefined.`)
   
      // get computed styles
      const styles = {
         card: getComputedStyle(card),
         container: getComputedStyle(
            document.querySelector(".MasonryLayout")
         ),
      }
   
      if (!styles.container)
         throw new Error(
            `container (${container}) styles (${card}) undefined.`
         )
      if (!styles.card)
         throw new Error(`card (${card}) styles (${card}) undefined.`)
      
      // get props
      const vals = {
         contentHeight: card.getBoundingClientRect().height,
         rowGap: parseInt(styles.container.getPropertyValue("grid-row-gap")),
         rowHeight: parseInt(
            styles.container.getPropertyValue("grid-auto-rows")
         ),
      }

      // calculate rowSpan using props
      const rowSpan = Math.ceil(
         (vals.contentHeight + vals.rowGap) / 
         (vals.rowHeight + vals.rowGap)
      )

      // set
      return rowSpan
   }
   catch (err) {
      console.error("In resizeMasonryCard(card):", err)
   }
}
