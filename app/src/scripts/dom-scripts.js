export function changeDOMTitle(document, text) {
   if (!document) return
   const newtitle = text + " | ejhfotos.com"
   document.title = newtitle
   document.querySelector("title").textContent = newtitle
}

// on document key press
export function keydownEvent(key, callback) {
   document.addEventListener("keydown", event => {
      if (event.key === key)
         callback()
   })
}
