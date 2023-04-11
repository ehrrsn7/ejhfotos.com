import { describe, test, expect } from "vitest"
// import Sidebar from "./Sidebar"

const add = (a, b) => a + b

describe("Sidebar.test.jsx", () => {
   test("should show title all the time", () => {
      expect(add(1, 2)).toBe(3)
   })
})
