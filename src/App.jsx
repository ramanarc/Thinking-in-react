import { useState } from 'react'
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import SearchBar from './components/SearchBar'
import { Table, ProductTable, SearchContainer, HStack } from './styles';


function App() {

  return (
    <>
      <Table>
        <FilterableProductTable>
          <SearchBar />
        </FilterableProductTable>
        <ProductTable>
          <HStack>
            <h4>Name</h4>
            <h4>Price</h4>
          </HStack>
          <h2>FRUITS</h2>
          <HStack>
            <p>Apple</p>
            <p>$1</p>
          </HStack>
          <HStack>
            <p>Mango</p>
            <p>$1</p>
          </HStack>
          <h2>VEGETABLES</h2>
          <HStack>
            <p>Leafy</p>
            <p>$4</p>
          </HStack>
          <HStack>
            <p>Cabbage</p>
            <p>$10</p>
          </HStack>
        </ProductTable>
      </Table>

    </>
  )
}

export default App
