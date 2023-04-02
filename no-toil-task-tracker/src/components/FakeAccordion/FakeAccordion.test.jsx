// https://eternaldev.com/blog/testing-a-react-application-with-vitest/
import { beforeEach, describe, expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { FakeAccordion } from "./FakeAccordion"

describe("FakeAccordion", () => {
   beforeEach(() => {
      render(<FakeAccordion title="Testing"><h4>Content</h4></FakeAccordion>)
   })

   test("should show title all the time", () => {
      expect(screen.getByText(/Testing/i)).toBeInTheDocument();
   })

   test("should not show the content at the start", () => {
      expect(screen.queryByText(/Content/i)).not.toBeInTheDocument();
   })

   test("should show the content on accordion click", async () => {
      const title = screen.getByText(/Show/i);
      fireEvent.click(title)

      expect(await screen.findByText(/Content/i)).toBeInTheDocument();
   })
})