export function separateCamelCase(string) {
   if (typeof string !== "string")
      throw `Type Error [In separateCamelCase(string)]: 'string' (${string}) variable is not of type 'string'`
   return string
      .replace(/([A-Z])/g, ' $1') // insert a space before all caps
      .replace(/^./, str => str.toUpperCase())
}
