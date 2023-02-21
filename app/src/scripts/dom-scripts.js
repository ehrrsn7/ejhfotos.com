export function changeDOMTitle(document, text) {
   try {
      if (!document) return
      const newtitle = text + " | ejhfotos.com"
      document.title = newtitle
      const titleElement = document.querySelector("#title")
      if (!titleElement)
         throw new Error("No element called '#title'")
      titleElement.textContent = newtitle
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
