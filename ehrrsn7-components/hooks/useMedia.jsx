import React from "react"
export const useMedia = (query) => {
   // code imported from build of "react-use" package
   const [ state, setState ] = React.useState(false)
      React.useEffect(() => {
      let mounted = true
      const mql = window.matchMedia(query)
      const onChange = () => {
         if (!mounted) return
         setState(!(!mql.matches))
      }
      mql.addListener(onChange)
      setState(mql.matches)
      return () => {
         mounted = false
         mql.removeListener(onChange)
      }
   }, [ query ])
   return state
}
