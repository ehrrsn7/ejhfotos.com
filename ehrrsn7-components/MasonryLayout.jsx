import React from "react"
import "./MasonryLayout.css"

export function MasonryLayout({style, children, columnwidth}) {
   return <span className="MasonryLayout" style={style} columnwidth={columnwidth}>
      {children}
   </span>
}

export function MasonryCard({style, children, columnwidth}) {
   // 10 makes things a little less jarring on load
   const [ gridRowEnd, setGridRowEnd ] = React.useState(10)
   const ref = React.createRef()

   React.useEffect(() => {
      setGridRowEnd(getGridRowEnd(ref.current))
      if (columnwidth) console.log({columnwidth})
   })

   return <div className="MasonryCard" ref={ref} 
   style={{gridRowEnd: `span ${gridRowEnd}`, ...style}}>
      {/* max-width: 100% - `padding-left + padding-right` */}
      {children}
   </div>
}

// helper functions
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
