import React from 'react'

const SearchBar = () => {
  return (
    <>
      <form className='search-bar'>
        <h2 style={{ marginBottom: '10px' }}>Thinking in React Exercise</h2>
        <input type="search" id="search" />
        <div className="checkbox-wrapper">
          <input type="checkbox" id="checkbox" />
          <label>Only show products in stock</label>
        </div>
      </form>
    </>
  )
}

export default SearchBar
