export function changeDOMTitle(document, text) {
   if (!document) return
   const newtitle = text + " | ejhfotos.com"
   document.title = newtitle
   document.querySelector("title").textContent = newtitle
}
