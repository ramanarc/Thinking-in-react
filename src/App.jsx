import { useState } from 'react'
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import SearchBar from './components/SearchBar'


function App() {

  return (
    <>
      <FilterableProductTable>
        <SearchBar />
      </FilterableProductTable>
    </>
  )
}

export default App
