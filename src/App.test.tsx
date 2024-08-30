import { render, screen } from "@testing-library/react"
import App from "./App"

test("App contains correct heading", () => {
  // render creates a simulated DOM
  render(<App />)
  // screen allows access to the simulated DOM
  // The slashes indicate we want a regular expression and i is case insensitive
  // Could use a string instead, e.g. 'learn React'
  const headingElement = screen.getByRole("heading", {
    name: /learn react/i,
  })
  // This is the Vitest assertion (same syntax in Jest)
  expect(headingElement).toBeInTheDocument()
})
