import { render, screen } from "@testing-library/react"
import CatNew from "./CatNew"
import { BrowserRouter } from 'react-router-dom'

describe("<CatNew />", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew/>
      </BrowserRouter>
    )
  })

  it("Has a form with text Name, Age, Enjoys, and Image", () => {

    const formName = screen.getByText("Name")
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("For")).toEqual("age")

    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("For")).toEqual("enjoys")

    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("For")).toEqual("image")

  })

})