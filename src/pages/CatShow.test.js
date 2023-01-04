import { render } from "@testing-library/react"
import CatShow from "./CatShow"

describe("<CatShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<CatShow />, div)
  })
})