import React from 'react'
import { useParams } from "react-router-dom"
import { render } from "@testing-library/react"

const CatShow = ({ cats }) => {

  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)


  return (
    <main className="cat-show-cards">
      {currentCat && (
        <>
          <img
            alt={`profile of a cat named ${currentCat.name}`}
            src={currentCat.image}
            className="cat-show-img"
          />
          {currentCat.name}<br /><br />{currentCat.age}<br /><br />{currentCat.enjoys}
        </>
      )}
    </main>
  )
}

export default CatShow