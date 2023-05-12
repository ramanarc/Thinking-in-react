import { useState } from 'react'
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import SearchBar from './components/SearchBar'
import { InputTable, SearchContainer } from './styles';


function App() {

  return (
    <>
      <InputTable>
        <FilterableProductTable>
          <SearchContainer>
            <SearchBar />
          </SearchContainer>
        </FilterableProductTable>
      </InputTable>
    </>
  )
}

export default App
