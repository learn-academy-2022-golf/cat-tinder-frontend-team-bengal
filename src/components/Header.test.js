import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Header />, div)
  })
})

it("renders a logo with a src and alt", () => {
  const div = document.createElement("div")
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    div
  )
  const logo = screen.getByRole("img")
  expect(logo).toHaveAttribute("src", "Logo_cat.png")
  expect(logo).toHaveAttribute("alt", "Cat Tinder logo with outline of cat")
})