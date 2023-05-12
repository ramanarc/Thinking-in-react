import React from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'
import { HStack } from '../styles'

const ProductTable = ({ products }) => {
  return (
    <>
      <HStack>
        <h4>Name</h4>
        <h4>Price</h4>
      </HStack>
      <ProductCategoryRow products={products} />
      <ProductRow products={products} />
    </>
  )
}

export default ProductTable
