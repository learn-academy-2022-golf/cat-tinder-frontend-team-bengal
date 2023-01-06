import React from 'react'
import { NavLink, useParams } from "react-router-dom"

import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from 'reactstrap'

const CatShow = ({ cats }) => {

  const { id } = useParams()


  const cat = cats?.find(cat => cat.id === +id)

  return (
  <main>
    <Card className="my-2">
      <CardImg
        alt="Card image cap"
        src={cat.image}
        style={{
          height: 180
        }}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          {`${cat.name}, ${cat.age}`} 
        </CardTitle>
        <CardText>
          {cat.enjoys}
        </CardText>
      
        <NavLink to={`/catedit/${cat.id}`} className="nav-link">
                Edit Cat Profile
        </NavLink>
      
      </CardBody>
    </Card>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    

  </main>
  )
}

export default CatShow