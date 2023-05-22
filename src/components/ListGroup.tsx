import React, { useState } from "react"
import { MouseEvent } from "react"

interface Props {
  heading: string;
  cities: string[];
}


const ListGroup = ({ heading, cities }: Props) => {

  const [selectedIndex, setSelectedIndex] = useState(-1); //would go from -1 to the index of clicked item

  return (
    <div className='m-4'>
      <h2>{heading}</h2>
      <ul className="list-group">
        {cities.map((city, index) => <li
          onClick={() => setSelectedIndex(index)}
          key={city}
          className={selectedIndex === index ? "list-group-item active" : "list-group-item"}>
          {city}</li>)}
      </ul>
    </div>
  )
}

export default ListGroup
