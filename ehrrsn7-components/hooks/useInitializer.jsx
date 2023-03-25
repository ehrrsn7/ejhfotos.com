import React from "react"
export function useInitializer(callback) {
   const mounted = React.useRef(false)
   React.useEffect(() => {
      try {
         if (!mounted.current) {
            mounted.current = true
            return callback()
         }
      }
      catch (err) { console.warn(err) }
   }, [])
   return mounted
}
