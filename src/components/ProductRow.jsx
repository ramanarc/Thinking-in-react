import React from 'react'
import { HStack } from '../styles'


const ProductRow = ({ products }) => {

  const inlineStyle = {
    flexGrow: 1
  }
  //if stocked true normal, if false (red)

  return (
    <>
      {products.map((product) =>
        <HStack>
          <div styles={inlineStyle}>
            {product.name}
          </div>
          {product.price}
        </HStack>)}
    </>
  )
}

export default ProductRow
