import React from 'react'
import { HStack } from '../styles'


const ProductRow = ({ products }) => {

  const inlineTextStyle = {
    color: '#DC2626'
  }

  //if stocked true normal, if false (red)

  return (
    <>
      {products.map((product) =>
        <HStack key={product.name}>
          <p style={inlineTextStyle}>{product.name}</p>
          {product.price}
        </HStack>)}
    </>
  )
}

export default ProductRow
