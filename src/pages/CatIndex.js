
import React from 'react'
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

// ******* End imports
// ******* Begin component

const CatIndex = ({ cats }) => {

  return (
    <main>
      {cats?.map((cat, index) => {
        return (
          <Card
            color="info"
            style={{
              width: "14rem"
            }}
            key={index}
          >
            <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {cat.age}
              </CardSubtitle>
              <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                See More Details
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default CatIndex