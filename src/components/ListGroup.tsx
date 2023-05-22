import React from "react"

const ListGroup = () => {

  const cities = ['New York', 'San Francisco', 'Tel Aviv', 'Italy', 'Mumbai', 'Paris']

  return (
    <div className='m-4'>
      <h2>List</h2>
      <ul className="list-group">
        {cities.map((city) => <li onClick={() => console.log(city)} key={city} className="list-group-item">{city}</li>)}
      </ul>
    </div>
  )
}

export default ListGroup
