import { render, screen } from "@testing-library/react"
import { BrowserRouter, Routes } from "react-router-dom"
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
})