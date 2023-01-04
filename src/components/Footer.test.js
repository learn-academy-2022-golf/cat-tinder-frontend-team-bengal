import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import userEvent from "@testing-library/user-event"
import Footer from "./Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  })
  
  it("has clickable links", () => {

    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("See the cats"))

    expect(screen.getByText("See the cats")).toBeInTheDocument()

    userEvent.click(screen.getByText("Create a new cat"))

    expect(screen.getByText("Create a new cat")).toBeInTheDocument()

    userEvent.click(screen.getByText("Edit a feline"))

    expect(screen.getByText("Edit a feline")).toBeInTheDocument()
  })
})