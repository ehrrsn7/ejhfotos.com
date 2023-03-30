export function changeDOMTitle(document, text) {
   try {
      if (!document) return
      const newTitle = text + " | ejhfotos.com"
      document.title = newTitle
      const titleElement = document.querySelector("#title")
      if (titleElement) titleElement.textContent = newTitle
   }
   catch (err) {
      console.warn(err)
   }
}

// on document key press
export function keydownEvent(key, callback) {
   document.addEventListener("keydown", event => {
      if (event.key === key)
         callback()
   })
}
