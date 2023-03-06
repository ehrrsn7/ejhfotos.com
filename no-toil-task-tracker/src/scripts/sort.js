const compareID = (a, b) => a < b
const compareTitle = (a, b) => a < b

export function sortHookList(hookList, setHookList, by="") {
   switch (by) {
      case "id":
         setHookList(hookList.sort(compareID))
         break
      case "Title":
         setHookList(hookList.sort(compareTitle))
         break
      default:
         throw new Error(`Unknown sorting specification: ${by}`)
   }
}
