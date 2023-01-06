import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const CatNew = ( { createCat } ) => {

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  const navigate = useNavigate()

  return (<div>

    <Form>
    <br /><br /><br />
    <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            onChange={handleChange}
            placeholder="What is the cat's name?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            name="age"
            onChange={handleChange}
            placeholder="What is the cat's age?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            name="enjoys"
            onChange={handleChange}
            placeholder="What does the cat enjoy?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            name="image"
            onChange={handleChange}
            placeholder="Share your image"
            type="url"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
    </Form>

    <br /><br /><br /><br /><br /><br /><br /><br /><br />

  </div>)
}

export default CatNew