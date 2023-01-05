import React, { useState }  from 'react'
import { useNavigate, useParams } from "react-router-dom"

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

  // ******************** 
  // End imports
  // Begin compontents
  // ******************** 

const CatEdit = ({ cats, updateCat }) => {

  const navigate = useNavigate()

  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    console.log (editCat)
    navigate("/catindex")
  }

  const { id } = useParams()

  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }

  // ******************** 
  // End functions
  // Begin Return
  // ******************** 

  return ( <>
    <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={editCat.name}/>
        </FormGroup>
    
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" name="age" onChange={handleChange} value={editCat.age}/>
        </FormGroup>
    
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input type="text" name="enjoys" onChange={handleChange} value={editCat.enjoys}/>
        </FormGroup>
        
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" onChange={handleChange} value={editCat.image}/>
        </FormGroup>

    </Form>
    
    <Button onClick={handleSubmit} name="submit">
      Submit Updated Cat
    </Button>
    
</> )
}

export default CatEdit