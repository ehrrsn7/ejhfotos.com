export function changeDOMTitle(document, text) {
   try {
      if (!document) return
      const newtitle = text + " | ejhfotos.com"
      document.title = newtitle
      document.querySelector("title")?.textContent = newtitle
   }
   catch (err) {
      console.error(err)
   }
}

// on document key press
export function keydownEvent(key, callback) {
   document.addEventListener("keydown", event => {
      if (event.key === key)
         callback()
   })
}
