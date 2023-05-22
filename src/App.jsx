import './App.css'
import ListGroup from './components/ListGroup'


function App() {
  const cities = ['New York', 'San Francisco', 'Tel Aviv', 'Italy', 'Mumbai', 'Paris']

  return (
    <>
      <ListGroup heading='City names' items={cities} />
    </>
  )

}

export default App
